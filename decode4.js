// decode4.js — giải mã main.js (javascript-obfuscator: base64 + RC4 + array-rotate)
// Cách tiếp cận: gom TẤT CẢ FunctionDeclaration trong AST -> chạy sandbox cùng rotate IIFE
// -> constant folding các lời gọi decoder -> dọn dẹp -> pretty print.
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

// ---------- 1) Thu thập mọi FunctionDeclaration (dedup theo node) ----------
const allFuncNodes = [];
{
  const seenF = new Set();
  traverse(ast, {
    FunctionDeclaration(path) {
      if (seenF.has(path.node)) return;
      seenF.add(path.node);
      // đặt tên lại hàm vô danh để gom vào sandbox
      if (!path.node.id) path.node.id = t.identifier('__anonFn_' + allFuncNodes.length);
      allFuncNodes.push(path.node);
    },
  });
}
console.log('FunctionDeclaration tìm được:', allFuncNodes.length);

// ---------- 2) Tìm rotate IIFE ----------
let rotateExpr = null, arrayFuncName = null, targetNum = null;
traverse(ast, {
  CallExpression(path) {
    if (rotateExpr) return;
    const n = path.node;
    if (t.isFunctionExpression(n.callee) && n.arguments.length === 2 &&
        t.isNumericLiteral(n.arguments[1]) && t.isIdentifier(n.arguments[0])) {
      rotateExpr = n; arrayFuncName = n.arguments[0].name; targetNum = n.arguments[1].value;
    }
  },
});
if (!rotateExpr) { console.error('Không thấy rotate IIFE'); process.exit(1); }
console.log('array fn:', arrayFuncName, '| checksum:', targetNum);

// ---------- 3) Sandbox: định nghĩa mọi hàm + chạy rotate + xuất bảng hàm ----------
// Guard chống vòng lặp vô hạn trong sandbox
const guard = `
var __t0 = Date.now();
Date.now = function(){ const t = __t0; if (Date._orig) return Date._orig(); return t; };
function __tick(){ if (Date.now() - __t0 > 8000) throw new Error('sandbox timeout'); }
`;
// chèn __tick() vào đầu mọi vòng lặp — dùng walk thủ công vì node rời rạc không có scope babel
function injectTicks(node) {
  walkInto(node, n => {
    if (n.type === 'WhileStatement' || n.type === 'DoWhileStatement' || n.type === 'ForStatement') {
      const tick = t.expressionStatement(t.callExpression(t.identifier('__tick'), []));
      if (n.body && n.body.type === 'BlockStatement') n.body.body.unshift(tick);
      else if (n.body) n.body = t.blockStatement([tick, t.isExpressionStatement(n.body) ? n.body : t.expressionStatement(n.body)]);
      else n.body = t.blockStatement([tick]);
    }
  });
}
function walkInto(node, cb) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { node.forEach(c => walkInto(c, cb)); return; }
  if (node.type) cb(node);
  for (const k of Object.keys(node)) {
    if (k === 'loc' || k === 'start' || k === 'end' || k === 'extra' || k === 'leadingComments' || k === 'trailingComments') continue;
    walkInto(node[k], cb);
  }
}
const guardedFuncs = allFuncNodes.map(n => {
  const c = t.cloneNode(n, false); // deep clone
  walkInto(c, () => {});
  injectTicks(c);
  return gen(c);
});
const rotateClone = t.cloneNode(rotateExpr, false);
injectTicks(rotateClone);
const rotateGuarded = gen(rotateClone);
const vmCode =
  guard + '\n' +
  guardedFuncs.join('\n') + '\n' +
  '(' + rotateGuarded + ');\n' +
  `globalThis.__allFuncs = ${JSON.stringify(allFuncNodes.map(f => f.id.name))}
      .reduce((o, k) => (o[k] = eval(k), o), {});`;
try {
  new Function(vmCode)();
} catch (e) {
  console.error('Sandbox lỗi:', e.message);
  process.exit(1);
}
const names = globalThis.__allFuncs || {};
const allFuncs = {};
for (const [k, v] of Object.entries(names)) if (typeof v === 'function') allFuncs[k] = v;
console.log('Hàm sống trong sandbox:', Object.keys(allFuncs).length);

// ---------- 4) Tìm decoder bằng heuristic ----------
let decoderName = null;
outer:
for (const [name, fn] of Object.entries(allFuncs)) {
  if (fn.length > 2 || /^__anonFn_/.test(name)) continue;
  let okCount = 0;
  for (let i = 150; i < 260; i++) {
    try {
      const v = fn(i);
      if (typeof v === 'string' && v.length > 0 && v.length < 300) okCount++;
      else break;
    } catch (e) { continue outer; }
  }
  if (okCount >= 20) { decoderName = name; break; }
}
if (!decoderName) { console.error('Không tìm được decoder!'); process.exit(1); }
const strFn = allFuncs[decoderName];
console.log('Decoder:', decoderName);
const sample = [];
for (let i = 170; i < 190; i++) { try { const v = strFn(i); if (typeof v === 'string') sample.push(v); } catch(e){} }
console.log('Sample decoded:', JSON.stringify(sample.slice(0, 12)));

// alias của decoder
const aliases = new Set();
traverse(ast, { VariableDeclarator(p) {
  if (t.isIdentifier(p.node.init, { name: decoderName })) aliases.add(p.node.id.name);
}});
console.log('Alias:', [...aliases]);

// ---------- 5) Constant folding ----------
function isSafeExpr(node) {
  // mọi Identifier tự do phải là decoder/alias; không có this/new/function
  let risky = false;
  traverse(node, {
    ReferencedIdentifier(p) {
      const nm = p.node.name;
      if (nm !== decoderName && !aliases.has(nm)) risky = true;
    },
    ThisExpression() { risky = true; },
    NewExpression() { risky = true; },
    Function() { risky = true; },
    MemberExpression(p) { /* cho phép obj.method trên string result */ },
    Identifier(p) {},
  }, undefined, {}, node); // note: traverse on a bare node needs no scope if we pass it via visitor keys? safer manual walk below
  return !risky;
}
// walk thủ công để tránh lỗi scope babel
function walk(node, cb) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { node.forEach(c => walk(c, cb)); return; }
  if (node.type) cb(node);
  for (const k of Object.keys(node)) {
    if (k === 'loc' || k === 'start' || k === 'end' || k === 'extra') continue;
    walk(node[k], cb);
  }
}
function safeExpr(node) {
  let risky = false;
  walk(node, n => {
    if (n.type === 'Identifier' && n.name !== decoderName && !aliases.has(n.name)) risky = true;
    if (n.type === 'ThisExpression' || n.type === 'NewExpression' ||
        n.type === 'FunctionExpression' || n.type === 'ArrowFunctionExpression' ||
        n.type === 'SequenceExpression' || n.type === 'UpdateExpression' ||
        n.type === 'AssignmentExpression' ||
        (n.type === 'CallExpression' && !(n.callee.type === 'Identifier' && (n.callee.name === decoderName || aliases.has(n.callee.name)))) ||
        (n.type === 'MemberExpression' && n.object.type !== 'CallExpression') ) risky = true;
  });
  return !risky;
}

function evalPure(node) {
  try {
    const src = gen(node);
    const f = new Function(decoderName, `"use strict";return (${src});`);
    const v = f(strFn);
    if (v === undefined || v === null) return null;
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') return v;
    return null;
  } catch (e) { return null; }
}

let folded = 0;
for (let iter = 0; iter < 6; iter++) {
  let changed = 0;
  traverse(ast, {
    Expression(path) {
      const n = path.node;
      if (t.isStringLiteral(n) || t.isNumericLiteral(n) || t.isBooleanLiteral(n)) return;
      const ok = t.isCallExpression(n) || t.isBinaryExpression(n) || t.isUnaryExpression(n) ||
                 t.isConditionalExpression(n) || t.isLogicalExpression(n);
      if (!ok) return;
      if (!safeExpr(n)) return;
      const v = evalPure(n);
      if (v !== null) {
        path.replaceWith(typeof v === 'string' ? t.stringLiteral(v) : t.valueToNode(v));
        changed++;
      }
    },
  });
  folded += changed;
  if (!changed) break;
}
console.log('Folded expressions:', folded);

// ---------- 6) Dọn khai báo obfuscator ----------
const helperNames = new Set([decoderName, ...aliases, arrayFuncName]);
traverse(ast, {
  FunctionDeclaration(path) {
    const nm = path.node.id?.name;
    if (!nm) return;
    if (helperNames.has(nm)) { path.remove(); return; }
    const b = path.scope.getBinding(nm);
    if (b && b.references === 0 && /^_0x/.test(nm)) path.remove();
  },
  VariableDeclaration(path) {
    for (const d of path.node.declarations) {
      if (t.isIdentifier(d.init) && helperNames.has(d.init.name)) { path.remove(); break; }
    }
  },
  ExpressionStatement(path) {
    const e = path.node.expression;
    if (e === rotateExpr) path.remove();
  },
});

// ---------- 7) Làm đẹp ----------
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
         .replace(/\\u([0-9a-fA-F]{4})/g, (m,h)=>{const c=parseInt(h,16); return (c<32||c>126)? m : String.fromCharCode(c);});
fs.writeFileSync(outFile, out);
console.log(`Xuất ${outFile}: ${out.length} chars (gốc ${code.length}).`);
