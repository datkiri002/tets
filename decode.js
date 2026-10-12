// Giải mã (unobfuscate) main.js dạng javascript-obfuscator
const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generate = require('@babel/generator').default;

const srcFile = process.argv[2];
const outFile = process.argv[3];
const code = fs.readFileSync(srcFile, 'utf8');

const ast = parser.parse(code, { sourceType: 'module', plugins: [] });

// ---------- B1: Tìm hàm decoder (dạng _0xXXXX(numeric)) và bảng chuỗi ----------
let decoderName = null;
let decoderFuncPath = null;

traverse(ast, {
  VariableDeclarator(path) {
    // pattern: var _0xa10031 = _0x1f13;
    if (t.isIdentifier(path.node.init)) {
      const binding = path.scope.getBinding(path.node.id.name);
      // check the referenced function has numeric-arg string lookup
      decoderName = path.node.init.name;
    }
  },
});

if (!decoderName) { console.error('Không tìm thấy decoder!'); process.exit(1); }

// lấy FunctionDeclaration của decoder
traverse(ast, {
  FunctionDeclaration(path) {
    if (path.node.id.name === decoderName) decoderFuncPath = path;
  },
});

// Bảng chuỗi: hàm array shuffle (IIFE) tham chiếu 1 hàm chứa mảng lớn các string literal
// Tìm function được gọi trong IIFE rotate: (function(_0x..,_0x..){...})(_0x25d8, NNN)
let arrayFuncName = null;
traverse(ast, {
  CallExpression(path) {
    const args = path.node.arguments;
    if (t.isFunctionExpression(path.node.callee) && args.length === 2 &&
        t.isNumericLiteral(args[1]) && t.isIdentifier(args[0])) {
      arrayFuncName = args[0].name;
    }
  },
});

// Lấy mảng chuỗi thô từ arrayFunc
let rawStrings = null;
traverse(ast, {
  FunctionDeclaration(path) {
    if (path.node.id.name === arrayFuncName) {
      // return [...string literals...]
      const ret = path.node.body.body.find(s => t.isReturnStatement(s));
      let el = ret.argument;
      // sometimes wrapped in a call to decoding fn per element — collect literals
      const collect = (node) => {
        if (t.isArrayExpression(node)) return node.elements.map(e => e.value);
        return null;
      };
      rawStrings = collect(el);
    }
  },
});

if (!rawStrings) { console.error('Không lấy được mảng chuỗi!'); process.exit(1); }

// ---------- B2: Mô phỏng vòng rotate (array rotation) ----------
// while(true){ try{ checksum... }catch{ push(shift) } if match break }
// Cách an toàn: chạy chính 2 hàm này trong sandbox bằng cách eval phần đầu file.
// Đơn giản hơn: copy code của arrayFunc + decoderFunc + IIFE rotate vào VM và chạy.

const gen = n => generate(n).code;

let decoderCodeSrc = gen(decoderFuncPath.node);
let arrayCodeSrc = gen(path_find(arrayFuncName));

function path_find(name) {
  let found = null;
  traverse(ast, { FunctionDeclaration(p) { if (p.node.id.name === name) found = p.node; } });
  return found;
}

// Tìm IIFE rotate statement
let rotateSrc = null;
traverse(ast, {
  ExpressionStatement(path) {
    const e = path.node.expression;
    if (t.isCallExpression(e) && t.isFunctionExpression(e.callee) &&
        e.arguments.length === 2 && t.isNumericLiteral(e.arguments[1])) {
      rotateSrc = gen(e);
    }
  },
});

const vmCode = arrayCodeSrc + '\n' + decoderCodeSrc + '\n' + rotateSrc + '\nthis.__str = ' + decoderName + ';';

const sandbox = {};
(new Function('with(this){' + vmCode + '}')).call(sandbox);
const strFn = sandbox.__str;

// Kiểm tra decoder trả về string
console.log('Thử decode index 101..110:', Array.from({length:10}, (_,i)=>strFn(101+i)));

// ---------- B3: Thay thế mọi lời gọi _0xdecoder(number) bằng string literal ----------
let replaced = 0;
traverse(ast, {
  CallExpression(path) {
    const n = path.node;
    if (t.isIdentifier(n.callee, { name: decoderName }) &&
        n.arguments.length === 1 && t.isNumericLiteral(n.arguments[0])) {
      const val = strFn(n.arguments[0].value);
      if (typeof val === 'string') {
        path.replaceWith(t.stringLiteral(val));
        replaced++;
      }
    }
  },
});
console.log('Đã thay thế', replaced, 'lời gọi decoder.');

// ---------- B4: Gộp computed member access -> dot, giải mã hex escapes, boolean ![] ----------
traverse(ast, {
  MemberExpression(path) {
    if (path.node.computed && t.isStringLiteral(path.node.property) &&
        /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(path.node.property.value)) {
      path.node.computed = false;
      path.node.property = t.identifier(path.node.property.value);
    }
  },
  UnaryExpression(path) {
    // !![] -> true, ![] -> false
    if (path.node.operator === '!' && t.isArrayExpression(path.node.argument) && path.node.argument.elements.length === 0) {
      if (t.isUnaryExpression(path.parentPath?.node) && path.parentPath.node.operator === '!') return; // handled by outer
      path.replaceWith(t.booleanLiteral(false));
    } else if (path.node.operator === '!' && path.node.argument.type === 'UnaryExpression' &&
               path.node.argument.operator === '!' && t.isArrayExpression(path.node.argument.argument) &&
               path.node.argument.argument.elements.length === 0) {
      path.replaceWith(t.booleanLiteral(true));
    }
  },
  NumericLiteral(path) {
    // chuyển hex thành thập phân cho dễ đọc
    const extra = path.extra;
    if (extra && typeof extra.raw === 'string' && /^0x/i.test(extra.raw)) {
      path.extra = { ...extra, raw: String(path.node.value) };
    }
  },
});

// Xóa khai báo decoder & array func & rotate IIFE (đã không còn dùng)
traverse(ast, {
  FunctionDeclaration(path) {
    if ([decoderName, arrayFuncName].includes(path.node.id?.name)) path.remove();
  },
});

let out = generate(ast, { retainLines: false, jsdocNodeFormat: 'clean' }).code;
// escape sequences tự động unescape khi generate? ép bằng JSON-style: babel giữ nguyên \u..., ta post-process
out = out.replace(/\\x([0-9a-fA-F]{2})/g, (m,h)=>String.fromCharCode(parseInt(h,16)))
         .replace(/\\u([0-9a-fA-F]{4})/g, (m,h)=>String.fromCharCode(parseInt(h,16)));

fs.writeFileSync(outFile, out);
console.log('Xuất ra', outFile, 'dài', out.length, 'chars (gốc', code.length, ')');
