const fs = require('fs');
const vm = require('vm');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const SRC = './Shopkeeper Behavior Pack/Shopkeeper Behavior Pack/scripts/main.js';
const code = fs.readFileSync(SRC, 'utf8');
const ast = parser.parse(code, { sourceType: 'module', errorRecovery: true });

const hexName = /^_0x[0-9a-f]{4,8}$/;

function findArrayAssignment(fnNode) {
  for (const st of fnNode.body.body)
    if (t.isVariableDeclaration(st))
      for (const d of st.declarations)
        if (t.isArrayExpression(d.init)) return d.init;
  return null;
}
function findOffset(fnNode) {
  const first = fnNode.body.body[0];
  if (first && t.isExpressionStatement(first) && t.isAssignmentExpression(first.expression) &&
      first.expression.operator === '=' && t.isBinaryExpression(first.expression.right) &&
      first.expression.right.operator === '-' && t.isNumericLiteral(first.expression.right.right))
    return first.expression.right.right.value;
  return null;
}

const arrayFns = new Map();   // name -> ArrayExpression node
const decoderFns = new Map(); // name -> offset
const aliasMap = new Map();   // alias -> base
const shuffleIIFEs = [];      // {arrayFn, target, srcCode}

for (const node of ast.program.body) {
  if (t.isFunctionDeclaration(node) && node.id && hexName.test(node.id.name)) {
    const n = node.id.name;
    const arr = findArrayAssignment(node);
    if (arr) { if (!arrayFns.has(n)) arrayFns.set(n, arr); }
    else { const off = findOffset(node); if (off !== null && node.params.length >= 1) decoderFns.set(n, off); }
  }
  if (t.isVariableDeclaration(node)) {
    for (const d of node.declarations)
      if (d.id && t.isIdentifier(d.init) && (decoderFns.has(d.init.name) || arrayFns.has(d.init.name)))
        aliasMap.set(d.id.name, d.init.name);
  }
  if (t.isExpressionStatement(node) && t.isCallExpression(node.expression) &&
      t.isFunctionExpression(node.expression.callee)) {
    const args = node.expression.arguments;
    if (args.length === 2 && t.isIdentifier(args[0]) && t.isNumericLiteral(args[1]) && arrayFns.has(args[0].name))
      shuffleIIFEs.push({ arrayFn: args[0].name, target: args[1].value, src: generate(node).code });
  }
}

console.log('arrayFns:', arrayFns.size, '| decoders:', decoderFns.size, '| aliases:', aliasMap.size, '| shuffles:', shuffleIIFEs.length);

function base(name) { let b = name; while (aliasMap.has(b)) b = aliasMap.get(b); return b; }

// raw arrays from AST literals (original order, pre-rotation)
const rawArrays = {};
for (const [name, arrNode] of arrayFns)
  rawArrays[name] = arrNode.elements.map(e => e.type === 'StringLiteral' ? e.value : null);

// custom-alphabet base64 decode (identical to obfuscator runtime)
function b64decode(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
  let out = '';
  for (let i = 0, acc = 0, chr; chr = str.charAt(i++); ~chr && (acc = i % 4 ? acc * 64 + chr : chr, i % 4) ? out += String.fromCharCode((255 & acc) << ((-2 * i) & 6)) : 0) {
    chr = alpha.indexOf(chr);
  }
  let uri = '';
  for (let j = 0; j < out.length; j++) uri += '%' + ('00' + out.charCodeAt(j).toString(16)).slice(-2);
  try { return decodeURIComponent(uri); } catch (e) { return out; }
}

// --- Execute each shuffle IIFE in a VM sandbox with the real decoder functions.
// Strategy: define all array fns (returning fresh copies), all decoder fns (from source),
// then run the shuffle statement and read back the rotated array.
const ctx = vm.createContext({
  parseInt, isNaN, Number, String, Math, JSON, decodeURIComponent, encodeURIComponent,
  console, TypeError, WeakSet, Object, Array, Date, RegExp, Error, Symbol, Reflect, Proxy
});

// Define decoder functions as source (they only need the array fn + b64 helper which is inside them)
for (const node of ast.program.body) {
  if (t.isFunctionDeclaration(node) && node.id && decoderFns.has(node.id.name)) {
    try { vm.runInContext(generate(node).code, ctx); } catch (e) { console.error('def decoder fail', node.id.name, e.message); }
  }
}
// Define array functions (original, unrotated) — the shuffle will rotate them via closure reassignment
for (const node of ast.program.body) {
  if (t.isFunctionDeclaration(node) && node.id && arrayFns.has(node.id.name)) {
    try { vm.runInContext(generate(node).code, ctx); } catch (e) { console.error('def array fail', node.id.name, e.message); }
  }
}
// Define aliases
for (const node of ast.program.body) {
  if (t.isVariableDeclaration(node)) {
    for (const d of node.declarations)
      if (d.id && t.isIdentifier(d.init) && (decoderFns.has(d.init.name) || arrayFns.has(d.init.name))) {
        try { vm.runInContext(`var ${d.id.name} = ${d.init.name};`, ctx); } catch (e) {}
      }
  }
}

// Run each shuffle IIFE for real; afterwards grab the (now rotated) array by calling the array fn
for (const s of shuffleIIFEs) {
  try {
    vm.runInContext(s.src, ctx);
    const arr = vm.runInContext(`${s.arrayFn}()`, ctx);
    // snapshot a copy so later rotations of other arrays don't matter
    vm.runInContext(`var __snap_${s.arrayFn.slice(3)} = ${s.arrayFn}().slice();`, ctx);
    console.log('shuffle done', s.arrayFn, 'len', arr.length);
  } catch (e) {
    console.error('shuffle fail', s.arrayFn, e.message);
  }
}

const rotatedArrays = {};
for (const name of arrayFns.keys()) {
  try {
    rotatedArrays[name] = vm.runInContext(`${name}().slice()`, ctx);
  } catch (e) {
    rotatedArrays[name] = rawArrays[name].slice();
  }
}

// map decoder base -> arrayFn used inside it
const decoderArr = {};
traverse(ast, {
  FunctionDeclaration(path) {
    const n = path.node.id && path.node.id.name;
    if (!n || !decoderFns.has(n) || n in decoderArr) return;
    let found = null;
    path.traverse({ CallExpression(p2) {
      if (p2.node.callee.type === 'Identifier') { const b = base(p2.node.callee.name); if (rotatedArrays[b]) found = b; }
    }});
    if (found) decoderArr[n] = { arrFn: found, offset: decoderFns.get(n) };
  }
});
console.log('decoder->array:', Object.keys(decoderArr).length, '/', decoderFns.size);

function resolve(name, idx) {
  const info = decoderArr[base(name)];
  if (!info) return null;
  const arr = rotatedArrays[info.arrFn];
  const i = idx - info.offset;
  if (i < 0 || i >= arr.length) return null;
  const raw = arr[i];
  if (typeof raw !== 'string') return null;
  try { return b64decode(raw); } catch (e) { return null; }
}

// Sanity check: verify against live decoder in vm for one index
{
  const sample = Object.keys(decoderArr)[0];
  if (sample) {
    const off = decoderFns.get(sample);
    try {
      const live = vm.runInContext(`${sample}(${off + 5})`, ctx);
      const mine = resolve(sample, off + 5);
      console.log('sanity', sample, JSON.stringify(live), JSON.stringify(mine), live === mine ? 'MATCH' : 'MISMATCH');
    } catch (e) { console.error('sanity fail', e.message); }
  }
}

let replaced = 0, missed = 0;
traverse(ast, {
  CallExpression(path) {
    const c = path.node.callee;
    if (!t.isIdentifier(c)) return;
    if (!decoderFns.has(base(c.name))) return;
    const args = path.node.arguments;
    if (args.length !== 1 || !t.isNumericLiteral(args[0])) return;
    const val = resolve(c.name, args[0].value);
    if (val === null) { missed++; return; }
    path.replaceWith(t.stringLiteral(val));
    replaced++;
  }
});
console.log('replaced:', replaced, 'missed:', missed);

// remove dead defs
traverse(ast, {
  ExportNamedDeclaration(path) {
    const d = path.node.declaration;
    if (d && t.isVariableDeclaration(d)) {
      const names = d.declarations.map(x => x.id && x.id.name);
      if (names.every(n => n && (decoderFns.has(n) || arrayFns.has(n) || aliasMap.has(n)))) path.remove();
    }
  },
  VariableDeclaration(path) {
    if (path.parentPath.isExportNamedDeclaration()) return;
    const names = path.node.declarations.map(d => d.id && d.id.name);
    if (names.every(n => n && (decoderFns.has(n) || arrayFns.has(n) || aliasMap.has(n)))) path.remove();
  },
  FunctionDeclaration(path) { const n = path.node.id && path.node.id.name; if (n && (decoderFns.has(n) || arrayFns.has(n))) path.remove(); },
  ExpressionStatement(path) {
    const e = path.node.expression;
    if (t.isCallExpression(e) && t.isFunctionExpression(e.callee)) {
      const args = e.arguments;
      if (args.length === 2 && t.isIdentifier(args[0]) && arrayFns.has(args[0].name)) path.remove();
    }
  }
});

// beautify
traverse(ast, {
  MemberExpression(path) {
    if (path.node.computed && t.isStringLiteral(path.node.property) && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(path.node.property.value)) {
      path.node.computed = false; path.node.property = t.identifier(path.node.property.value);
    }
  },
  ObjectProperty(path) {
    if (t.isStringLiteral(path.node.key) && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(path.node.key.value)) {
      path.node.key = t.identifier(path.node.key.value); path.node.computed = false;
    }
  },
  UnaryExpression(path) { if (path.node.operator === '!' && t.isBooleanLiteral(path.node.argument)) path.replaceWith(t.booleanLiteral(!path.node.argument.value)); },
  BinaryExpression(path) { if (path.node.operator === '+' && t.isStringLiteral(path.node.left) && t.isStringLiteral(path.node.right)) path.replaceWith(t.stringLiteral(path.node.left.value + path.node.right.value)); }
});

const out = generate(ast, {}).code;
fs.writeFileSync('./main.deobfuscated.js', out);
console.log('written ./main.deobfuscated.js bytes:', out.length);
