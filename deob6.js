const fs = require('fs');
const vm = require('vm');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const SRC = './Shopkeeper Behavior Pack/Shopkeeper Behavior Pack/scripts/main.js';
const code = fs.readFileSync(SRC, 'utf8');
const ast = parser.parse(code, { sourceType: 'module', errorRecovery: true });

// ---------- 1. Collect top-level pieces ----------
const arrayFnNodes = new Map();   // name -> FunctionDeclaration (contains string array)
const decoderFnNodes = new Map(); // name -> FunctionDeclaration (has params + offset)
const aliasDecls = [];            // var X = Y;
const shuffleStmts = [];          // ExpressionStatement of IIFE with (ident, numeric)

for (const node of ast.program.body) {
  if (t.isFunctionDeclaration(node) && node.id && /^_0x[0-9a-f]{4,8}$/.test(node.id.name)) {
    const n = node.id.name;
    let hasArr = false;
    for (const st of node.body.body)
      if (t.isVariableDeclaration(st))
        for (const d of st.declarations)
          if (t.isArrayExpression(d.init) && d.init.elements.length > 5) hasArr = true;
    if (hasArr) arrayFnNodes.set(n, node);
    else if (node.params.length >= 1) decoderFnNodes.set(n, node);
  } else if (t.isVariableDeclaration(node)) {
    for (const d of node.declarations)
      if (d.id.type === 'Identifier' && t.isIdentifier(d.init)) aliasDecls.push({ alias: d.id.name, base: d.init.name });
  } else if (t.isExpressionStatement(node) && t.isCallExpression(node.expression) &&
             t.isFunctionExpression(node.expression.callee)) {
    const args = node.expression.arguments;
    if (args.length === 2 && t.isIdentifier(args[0]) && t.isNumericLiteral(args[1]))
      shuffleStmts.push(node);
  }
}
console.log('arrayFns:', arrayFnNodes.size, '| decoders:', decoderFnNodes.size, '| aliases:', aliasDecls.length, '| shuffles:', shuffleStmts.length);

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

// raw arrays from AST
const rawArrays = {};
for (const [name, fnNode] of arrayFnNodes) {
  let arr = null;
  for (const st of fnNode.body.body)
    if (t.isVariableDeclaration(st))
      for (const d of st.declarations)
        if (t.isArrayExpression(d.init) && d.init.elements.length > 5) arr = d.init;
  rawArrays[name] = arr.elements.map(e => e.type === 'StringLiteral' ? e.value : null);
}

// decoder info: offset + which array fn it uses
const aliasBase = new Map();
for (const a of aliasDecls) aliasBase.set(a.alias, a.base);
function base(name) { let b = name; while (aliasBase.has(b)) b = aliasBase.get(b); return b; }

const decoderInfo = {}; // baseName -> {arrFn, offset}
for (const [n, fnNode] of decoderFnNodes) {
  const first = fnNode.body.body[0];
  let off = null;
  try { off = first.expression.right.right.value; } catch (e) {}
  let arrFn = null;
  traverse(fnNode, { CallExpression(p) {
    const c = p.node.callee;
    if (c.type === 'Identifier' && rawArrays[base(c.name)] !== undefined) arrFn = base(c.name);
  }, noScope: true });
  if (off !== null && arrFn) decoderInfo[n] = { arrFn, offset: off };
}
console.log('decoderInfo:', Object.keys(decoderInfo).length);

// map arrayFn -> the shuffle stmt that rotates it
const shuffleByArray = {};
for (const st of shuffleStmts) {
  const arg0 = st.expression.arguments[0].name;
  if (rawArrays[arg0]) shuffleByArray[arg0] = st;
}

// ---------- 2. Execute per-array setup in isolated VM contexts ----------
const rotatedArrays = {};
let ctxCount = 0;
for (const [name, orig] of Object.entries(rawArrays)) {
  const info = Object.values(decoderInfo).find(d => d.arrFn === name);
  if (!info) { rotatedArrays[name] = orig.slice(); continue; }
  const decNode = [...decoderFnNodes.entries()].find(([k, v]) => k === Object.keys(decoderInfo).find(kn => decoderInfo[kn] === info));
  // find decoder base name whose arrFn is this array
  const decName = Object.keys(decoderInfo).find(kn => decoderInfo[kn] === info);
  const decFnNode = decoderFnNodes.get(decName);
  const shuffleNode = shuffleByArray[name];
  const ctx = vm.createContext({ parseInt, isNaN, Number, String, Math, JSON, console, Date, Object, Array });
  try {
    vm.runInContext(generate(decFnNode).code, ctx);           // define decoder
    vm.runInContext(`var ${decName}_ref = ${decName};`, ctx); // keep ref
    // define array fn fresh (original order)
    vm.runInContext(generate(arrayFnNodes.get(name)).code, ctx);
    if (shuffleNode) {
      vm.runInContext(generate(shuffleNode).code, ctx);       // rotate until check passes
    }
    const arr = vm.runInContext(`${name}().slice()`, ctx);
    rotatedArrays[name] = arr;
    ctxCount++;
    console.log('rotated', name, 'len', arr.length, 'shifted?', arr[0] !== orig[0]);
  } catch (e) {
    console.error('rotate fail', name, e.message.slice(0, 100));
    rotatedArrays[name] = orig.slice();
  }
}

// ---------- 3. Verify resolution vs live decoder in each context is consistent: decode check ----------
function resolveLocal(name, idx) {
  const info = decoderInfo[base(name)];
  if (!info) return null;
  const v = rotatedArrays[info.arrFn][idx - info.offset];
  if (typeof v !== 'string') return null;
  try { return b64decode(v); } catch (e) { return null; }
}
{
  let ok = 0, bad = 0;
  for (const bn of Object.keys(decoderInfo)) {
    const off = decoderInfo[bn].offset;
    const len = rotatedArrays[decoderInfo[bn].arrFn].length;
    for (const delta of [0, 5, 17, 40, 100]) {
      if (off + delta >= off + len) continue;
      const mine = resolveLocal(bn, off + delta);
      if (mine !== null && typeof mine === 'string' && mine.length > 0) ok++; else bad++;
    }
  }
  console.log('sample decoded ok:', ok, 'bad:', bad);
  // print a few samples
  for (const bn of Object.keys(decoderInfo).slice(0, 3)) {
    const off = decoderInfo[bn].offset;
    console.log(bn, [0,1,2,3].map(d => JSON.stringify(resolveLocal(bn, off + d))).join(' | '));
  }
}

// ---------- 4. Replace decoder calls with literals ----------
let replaced = 0, missed = 0;
traverse(ast, {
  CallExpression(path) {
    const c = path.node.callee;
    if (!t.isIdentifier(c)) return;
    if (!decoderInfo[base(c.name)]) return;
    const args = path.node.arguments;
    if (args.length !== 1 || !t.isNumericLiteral(args[0])) return;
    const val = resolveLocal(c.name, args[0].value);
    if (val === null) { missed++; return; }
    path.replaceWith(t.stringLiteral(val));
    replaced++;
  }
});
console.log('replaced:', replaced, 'missed:', missed);

// ---------- 5. Remove dead obfuscator defs ----------
const deadNames = new Set([...arrayFnNodes.keys(), ...decoderFnNodes.keys(), ...aliasDecls.map(a => a.alias)]);
traverse(ast, {
  ExportNamedDeclaration(path) {
    const d = path.node.declaration;
    if (d && t.isVariableDeclaration(d)) {
      const names = d.declarations.map(x => x.id && x.id.name);
      if (names.every(n => n && deadNames.has(n))) path.remove();
    }
  },
  VariableDeclaration(path) {
    if (path.parentPath.isExportNamedDeclaration()) return;
    const names = path.node.declarations.map(d => d.id && d.id.name);
    if (names.every(n => n && deadNames.has(n))) path.remove();
  },
  FunctionDeclaration(path) {
    const n = path.node.id && path.node.id.name;
    if (n && deadNames.has(n)) path.remove();
  },
  ExpressionStatement(path) {
    if (shuffleStmts.includes(path.node)) path.remove();
  }
});

// ---------- 6. Beautify ----------
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
