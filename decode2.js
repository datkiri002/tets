// Giải mã main.js (javascript-obfuscator: base64 + RC4 + array rotate)
const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generate = require('@babel/generator').default;

const srcFile = process.argv[2];
const outFile = process.argv[3];
const code = fs.readFileSync(srcFile, 'utf8');
const ast = parser.parse(code, { sourceType: 'module' });
const gen = n => generate(n).code;

// --- Tìm IIFE rotate: (function(a,b){...})(_0xXXXX, NUMBER) ---
let arrayFuncName = null, targetNum = null, rotateNode = null;
traverse(ast, {
  CallExpression(path) {
    const n = path.node;
    if (arrayFuncName) return;
    if (t.isFunctionExpression(n.callee) && n.arguments.length === 2 &&
        t.isNumericLiteral(n.arguments[1]) && t.isIdentifier(n.arguments[0])) {
      arrayFuncName = n.arguments[0].name;
      targetNum = n.arguments[1].value;
      rotateNode = n;
    }
  },
});
if (!arrayFuncName) { console.error('Không thấy rotate IIFE'); process.exit(1); }

// --- Tìm hàm decoder: FunctionDeclaration được gọi với 2 số trong file ---
let decoderName = null, decoderNode = null;
traverse(ast, {
  CallExpression(path) {
    if (decoderName) return;
    const n = path.node;
    if (t.isIdentifier(n.callee) && n.arguments.length >= 1 && t.isNumericLiteral(n.arguments[0])) {
      const b = path.scope.getBinding(n.callee.name);
      if (b && b.path.node.type === 'FunctionDeclaration') {
        decoderName = n.callee.name;
        decoderNode = b.path.node;
      }
    }
  },
});
if (!decoderName) { console.error('Không thấy decoder'); process.exit(1); }
console.log('rotate array fn:', arrayFuncName, '| checksum:', targetNum, '| decoder:', decoderName);

// --- Thu thập MỌI FunctionDeclaration trong chương trình gốc ---
const allFuncs = new Map(); // name -> node
{
  const seenF = new Set();
  traverse(ast, {
    FunctionDeclaration(path) {
      if (seenF.has(path.node)) return;
      seenF.add(path.node);
      allFuncs.set(path.node.id.name, path.node);
    },
  });
}

// closure: các hàm được tham chiếu tự do bên trong một tập hợp hàm
function closure(names) {
  const seen = new Set();
  const queue = [...names];
  while (queue.length) {
    const nm = queue.shift();
    if (seen.has(nm)) continue;
    seen.add(nm);
    const node = allFuncs.get(nm);
    if (!node) continue;
    // quét identifier thủ công để tránh lỗi scope của babel khi traverse node rời
    JSON.stringify(node, (k, v) => {
      if (v && v.type === 'Identifier' && allFuncs.has(v.name) && !seen.has(v.name)) queue.push(v.name);
      return v;
    });
  }
  return [...seen];
}

// Tìm alias của decoder: var _0xaXXXXX = decoderName;
const aliases = new Map(); // alias -> decoderName
traverse(ast, {
  VariableDeclarator(path) {
    if (t.isIdentifier(path.node.init, { name: decoderName })) {
      aliases.set(path.node.id.name, decoderName);
    }
  },
});

const needed = closure([decoderName, arrayFuncName]);
const vmParts = needed.map(n => gen(allFuncs.get(n)));
// biến toàn cục khác được tham chiếu? (thường không)
vmParts.push(`(${gen(rotateNode.callee)})(${arrayFuncName}, ${targetNum});`);
vmParts.push(`globalThis.__dec = ${decoderName};`);
const vmCode = vmParts.join('\n');
fs.writeFileSync('/tmp/vmcode.js', vmCode);
try {
  (new Function(vmCode))();
} catch(e) {
  console.error('Lỗi sandbox VM:', e.message);
  process.exit(1);
}
const strFn = globalThis.__dec;

// Kiểm tra thử vài index (offset thực tế có thể khác, quét rộng)
{
  const sample = [];
  for (let i = 150; i < 200; i++) { try { const v = strFn(i); if (typeof v === 'string') sample.push(v); } catch(e){} }
  console.log('Sample decoded:', JSON.stringify(sample.slice(0, 12)));
}

// --- Thay thế mọi lời gọi decoder/alias(number[,str]) bằng string literal ---
let replaced = 0, failed = 0;
traverse(ast, {
  CallExpression(path) {
    const n = path.node;
    let fn = null;
    if (t.isIdentifier(n.callee, { name: decoderName })) fn = strFn;
    else if (t.isIdentifier(n.callee) && aliases.has(n.callee.name)) fn = strFn;
    if (!fn) return;
    if (n.arguments.every(a => t.isNumericLiteral(a) || t.isStringLiteral(a))) {
      try {
        const val = fn(...n.arguments.map(a => a.value));
        if (typeof val === 'string') { path.replaceWith(t.stringLiteral(val)); replaced++; return; }
      } catch(e) {}
      failed++;
    }
  },
});
console.log(`Đã giải mã ${replaced} chuỗi, lỗi ${failed}.`);

// --- Dọn dẹp: xóa khai báo decoder/arrayfn/rotate/alias ---
traverse(ast, {
  FunctionDeclaration(path) {
    if ([decoderName, arrayFuncName].includes(path.node.id?.name)) path.remove();
  },
  ExpressionStatement(path) {
    const e = path.node.expression;
    if (e === rotateNode || (t.isCallExpression(e) && t.isFunctionExpression(e.callee) &&
        e.arguments.length===2 && t.isNumericLiteral(e.arguments[1]))) path.remove();
  },
  VariableDeclarator(path) {
    // var _0xa10031 = _0x1f13;  -> alias của decoder
    if (t.isIdentifier(path.node.init, { name: decoderName })) {
      const alias = path.node.id.name;
      const binding = path.scope.getBinding(alias);
      if (binding && binding.referencePaths.every(rp => !rp.parentPath.isCallExpression?.())) {}
      // thay các tham chiếu còn lại rồi xóa
      binding.referencePaths.forEach(rp => rp.replaceWith(t.stringLiteral('?alias')));
      path.remove();
    }
  },
});

// --- Làm đẹp: a["b"] -> a.b, ![]/!![] -> boolean, hex -> dec ---
traverse(ast, {
  MemberExpression(path) {
    if (path.node.computed && t.isStringLiteral(path.node.property) &&
        /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(path.node.property.value)) {
      path.node.computed = false;
      path.node.property = t.identifier(path.node.property.value);
    }
  },
  UnaryExpression(path) {
    const isEmptyArr = x => t.isArrayExpression(x) && x.elements.length === 0;
    if (path.node.operator === '!' && isEmptyArr(path.node.argument)) {
      if (t.isUnaryExpression(path.parent) && path.parent.operator === '!') return;
      path.replaceWith(t.booleanLiteral(false));
    } else if (path.node.operator === '!' && t.isUnaryExpression(path.node.argument) &&
               path.node.argument.operator === '!' && isEmptyArr(path.node.argument.argument)) {
      path.replaceWith(t.booleanLiteral(true));
    }
  },
  NumericLiteral(path) {
    if (path.extra && /^0x/i.test(path.extra.raw || '')) path.extra.raw = String(path.node.value);
  },
});

let out = gen(ast);
out = out.replace(/\\x([0-9a-fA-F]{2})/g, (m,h)=>String.fromCharCode(parseInt(h,16)))
         .replace(/\\u([0-9a-fA-F]{4})/g, (m,h)=>{const c=parseInt(h,16); return c<128?String.fromCharCode(c):m;});
fs.writeFileSync(outFile, out);
console.log(`Xuất ${outFile}: ${out.length} chars (gốc ${code.length}).`);
