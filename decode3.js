// decode3.js — giải mã main.js (javascript-obfuscator: base64+RC4+array-rotate)
// Chạy nguyên file trong sandbox với import được stub, rồi trích hàm decoder.
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

// ---------- 1) Sandbox chạy toàn bộ chương trình (bỏ import/export) ----------
const body = ast.program.body.filter(s => !t.isImportDeclaration(s) && !t.isExportNamedDeclaration(s) && !t.isExportAllDeclaration(s));
// gỡ các副作用 có thể treo: setInterval/process — giữ nguyên, chỉ cần khởi tạo xong phần decoder


// ---------- Sandbox: chỉ định nghĩa MỌI hàm + chạy rotate IIFE ----------
const funcDecls = allFuncNodes.map(gen).join('\n');
// tìm rotate IIFE trong chương trình
let rotateExpr = null;
traverse(ast, {
  CallExpression(path) {
    if (rotateExpr) return;
    const n = path.node;
    if (t.isFunctionExpression(n.callee) && n.arguments.length === 2 &&
        t.isNumericLiteral(n.arguments[1]) && t.isIdentifier(n.arguments[0])) {
      rotateExpr = n;
    }
  },
});
const rotateSrc = rotateExpr ? gen(rotateExpr) : '';
const vmCode = funcDecls + '\n' + rotateSrc +
  '\nglobalThis.__allFuncs = {' + allFuncNodes.map(f => `${JSON.stringify(f.id.name)}:${f.id.name}`).join(',') + '};';
fs.writeFileSync('/tmp/vm_full.js', vmCode);
try {
  new Function(vmCode)();
} catch (e) {
  console.error('Sandbox lỗi:', e.constructor.name + ': ' + e.message);
}
let allFuncs = globalThis.__allFuncs || {};
// loại các binding trỏ tới undefined/fake
for (const k of Object.keys(allFuncs)) if (typeof allFuncs[k] !== 'function') delete allFuncs[k];
console.log('Hàm sống trong sandbox:', Object.keys(allFuncs).length);

// ---------- 2) Tìm decoder qua heuristic ----------
// decoder: hàm mà _0xXXXX(101..400) trả về string
let decoderName = null;
for (const [name, fn] of Object.entries(allFuncs)) {
  try {
    const v = fn(200);
    if (typeof v === 'string' && v.length > 0 && v.length < 200) {
      const v2 = fn(201);
      if (typeof v2 === 'string') { decoderName = name; break; }
    }
  } catch (e) {}
}
if (!decoderName) { console.error('Không tìm được decoder!'); process.exit(1); }
const strFn = allFuncs[decoderName];
console.log('Decoder:', decoderName);
const sample = [];
for (let i = 170; i < 190; i++) { try { const v = strFn(i); if (typeof v === 'string') sample.push(v); } catch(e){} }
console.log('Sample:', JSON.stringify(sample.slice(0, 12)));

// alias: var X = decoderName
const aliases = new Set();
traverse(ast, { VariableDeclarator(p) {
  if (t.isIdentifier(p.node.init, { name: decoderName })) aliases.add(p.node.id.name);
}});

// ---------- 3) Constant folding rộng: thay biểu thức con bằng giá trị hằng ----------
function evalPure(node) {
  // trả về {value} nếu node là biểu thức thuần tính được bằng strFn / literal
  try {
    const src = gen(node);
    // chỉ cho phép dùng hàm decoder + literals
    const f = new Function(strFn, `"use strict";return (${src});`);
    const v = f(strFn);
    if (v === undefined || v === null) return null;
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') return v;
    return null;
  } catch (e) { return null; }
}

let folded = 0;
// lặp đến ổn định (tối đa 5 vòng)
for (let iter = 0; iter < 5; iter++) {
  let changedThis = 0;
  traverse(ast, {
    Expression(path) {
      const n = path.node;
      // bỏ qua nếu đã là literal
      if (t.isStringLiteral(n) || t.isNumericLiteral(n) || t.isBooleanLiteral(n)) return;
      // chỉ fold các loại đơn giản
      const ok = t.isCallExpression(n) || t.isBinaryExpression(n) || t.isUnaryExpression(n) ||
                 t.isConditionalExpression(n) || t.isLogicalExpression(n);
      if (!ok) return;
      // call phải là decoder/alias hoặc member chuỗi quen thuộc không side-effect
      if (t.isCallExpression(n)) {
        const s = gen(n);
        const isDec = t.isIdentifier(n.callee, {name: decoderName}) || (t.isIdentifier(n.callee) && aliases.has(n.callee.name));
        if (!isDec && !/^strFn\([\d,\s"']*\)$/.test(s.replace(decoderName,'strFn'))) {
          // vẫn thử: nếu mọi identifier tự do đều nằm trong whitelist hàm an toàn thì mới fold
          let risky = false;
          traverse(n, { ReferencedIdentifier(p) {
            const rnm = p.node.name;
            if (rnm !== decoderName && !aliases.has(rnm)) risky = true;
          }});
          if (risky) return;
        }
      } else {
        let risky = false;
        traverse(n, { ReferencedIdentifier(p) {
          if (p.node.name !== decoderName && !aliases.has(p.node.name)) risky = true;
        }});
        if (risky) return;
      }
      const v = evalPure(n);
      if (v !== null) {
        path.replaceWith(typeof v === 'string' ? t.stringLiteral(v) : t.valueToNode(v));
        changedThis++;
      }
    },
  });
  folded += changedThis;
  if (!changedThis) break;
}
console.log('Folded expressions:', folded);

// ---------- 4) Dọn dẹp: xóa khai báo decoder/alias/rotate/array-fn & RC4 helpers ----------
const helperNames = new Set([decoderName, ...aliases]);
// xác định array fn + rotate IIFE
let arrayFuncName = null, rotateTarget = null;
traverse(ast, {
  CallExpression(path) {
    const n = path.node;
    if (arrayFuncName) return;
    if (t.isFunctionExpression(n.callee) && n.arguments.length === 2 &&
        t.isNumericLiteral(n.arguments[1]) && t.isIdentifier(n.arguments[0])) {
      arrayFuncName = n.arguments[0].name; rotateTarget = n.arguments[1].value;
    }
  },
});
helperNames.add(arrayFuncName);
// các hàm helper còn lại của obfuscator (base64/rc4): _0x1a24, _0x50f16e... — kiểm tra không còn tham chiếu sau khi xóa
traverse(ast, {
  FunctionDeclaration(path) {
    const nm = path.node.id?.name;
    if (!nm) return;
    const b = path.scope.getBinding(nm);
    if (helperNames.has(nm)) { path.remove(); return; }
    // nếu binding không còn reference nào -> xóa (dead code của obfuscator)
    if (b && b.references === 0 && b.kind === 'function' && /^_0x/.test(nm)) path.remove();
  },
  VariableDeclaration(path) {
    // xóa var _0xaXXX = _0xdec;
    for (const d of path.node.declarations) {
      if (t.isIdentifier(d.init) && helperNames.has(d.init.name)) path.remove();
    }
  },
  ExpressionStatement(path) {
    const e = path.node.expression;
    if (t.isCallExpression(e) && t.isFunctionExpression(e.callee) &&
        e.arguments.length === 2 && t.isNumericLiteral(e.arguments[1]) &&
        e.arguments[0].name === arrayFuncName) path.remove();
  },
});

// ---------- 5) Làm đẹp ----------
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
         .replace(/\\u([0-9a-fA-F]{4})/g, (m,h)=>{const c=parseInt(h,16); return c<32||c>126? m : String.fromCharCode(c);});
fs.writeFileSync(outFile, out);
console.log(`Xuất ${outFile}: ${out.length} chars (gốc ${code.length}).`);
