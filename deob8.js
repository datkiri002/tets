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
  // EXACT replica of the runtime decoder found inside _0x1f13 etc.
  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
  let out = '', uri = '';
  for (let i = 0, acc, chr, k = 0; chr = str.charAt(k++); ~chr && (acc = i % 4 ? acc * 64 + chr : chr, i++ % 4) ? out += String.fromCharCode(255 & acc >> (-2 * i & 6)) : 0) {
    chr = alpha.indexOf(chr);
  }
  for (let j = 0, m = out.length; j < m; j++) uri += '%' + ('00' + out.charCodeAt(j).toString(16)).slice(-2);
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
const liveCtx = {};
for (const [name, orig] of Object.entries(rawArrays)) {
  const decName = Object.keys(decoderInfo).find(kn => decoderInfo[kn].arrFn === name);
  if (!decName) { rotatedArrays[name] = orig.slice(); continue; }
  const decFnNode = decoderFnNodes.get(decName);
  const shuffleNode = shuffleByArray[name];
  const ctx = vm.createContext({ parseInt, isNaN, Number, String, Math, JSON, console, Date, Object, Array });
  try {
    vm.runInContext(generate(decFnNode).code, ctx);
    vm.runInContext(generate(arrayFnNodes.get(name)).code, ctx);
    if (shuffleNode) vm.runInContext(generate(shuffleNode).code, ctx);
    rotatedArrays[name] = vm.runInContext(`${name}().slice()`, ctx);
    liveCtx[name] = { ctx, decName };
  } catch (e) {
    console.error('rotate fail', name, e.message.slice(0, 100));
    rotatedArrays[name] = orig.slice();
  }
}

function resolveLocal(name, idx) {
  const info = decoderInfo[base(name)];
  if (!info) return null;
  const v = rotatedArrays[info.arrFn][idx - info.offset];
  if (typeof v !== 'string') return null;
  try { return b64decode(v); } catch (e) { return null; }
}

// verify vs live
{
  let ok = 0, bad = 0;
  for (const bn of Object.keys(decoderInfo)) {
    const info = decoderInfo[bn];
    const lc = liveCtx[info.arrFn];
    if (!lc) continue;
    const len = rotatedArrays[info.arrFn].length;
    for (let delta = 0; delta < Math.min(len, 40); delta++) {
      const idx = info.offset + delta;
      let live;
      try { live = vm.runInContext(`${lc.decName}(${idx})`, lc.ctx); } catch (e) { continue; }
      const mine = resolveLocal(bn, idx);
      if (live === mine) ok++; else bad++;
    }
  }
  console.log('verify vs live decoder -> ok:', ok, 'bad:', bad);
}

// ---------- 3. Iterative inline pass over whole program ----------
// Repeat until no more changes (or max passes):
//  a) replace decoder(alias)(num) with literal
//  b) fold `const L = <decoder-or-alias>;` then replace L(num) using L's binding
//  c) remove now-unused local decoder-binding declarations
//  d) evaluate simple object dictionaries {"key": "literal"} into member accesses where safe
let changedTotal = 0;
for (let pass = 0; pass < 12; pass++) {
  let changed = 0;

  // Build a scope-aware map of local bindings: identifier name -> decoder base name (via chain of const decls)
  // We do this function-by-function via path.scope walk during traversal below.

  // helper: given a callee Identifier and its containing scope, resolve to a known decoder base name
  function resolveCalleeToDecoder(identName, scopePath) {
    // direct global decoder?
    if (decoderInfo[base(identName)]) return base(identName);
    // walk up scopes looking for const/let/var NAME = <identifier>
    let p = scopePath;
    const seen = new Set();
    while (p && !seen.has(p.node)) {
      seen.add(p.node);
      const bind = p.scope.bindings && p.scope.bindings[identName];
      if (bind) {
        const dn = bind.decl && bind.decl.node && bind.decl.node.init;
        if (dn && dn.type === 'Identifier') {
          identName = dn.name;
          if (decoderInfo[base(identName)]) return base(identName);
          // continue searching upward for THAT name
          const next = resolveCalleeToDecoder(dn.name, p.parentPath || p);
          if (next) return next;
        } else if (dn && dn.type === 'ObjectExpression') {
          return { objDict: bind };
        }
      }
      p = p.parentPath;
    }
    return null;
  }

  // a) decoder calls with numeric args
  traverse(ast, {
    CallExpression(path) {
      const c = path.node.callee;
      if (!t.isIdentifier(c)) return;
      const b = resolveCalleeToDecoder(c.name, path);
      if (!b || typeof b !== 'string') return;
      const args = path.node.arguments;
      if (args.length !== 1 || !t.isNumericLiteral(args[0])) return;
      const val = resolveLocal(b, args[0].value);
      if (val === null) return;
      path.replaceWith(t.stringLiteral(val));
      changed++;
    }
  });

  // b) remove dead local bindings `const X = <decoderName>` when X no longer referenced as function
  traverse(ast, {
    VariableDeclarator(path) {
      const init = path.node.init;
      if (!init || init.type !== 'Identifier') return;
      if (!decoderInfo[base(init.name)]) return;
      const nm = path.node.id.name;
      const bind = path.scope.bindings[nm];
      if (!bind) return;
      // check all references: if every reference is a call we already replaced, or zero refs -> remove
      let usedAsFn = false, otherUse = false;
      for (const r of bind.referencePaths) {
        const parent = r.parentPath;
        if (parent.isCallExpression({ callee: r.node })) usedAsFn = true; // still unreplaced call
        else otherUse = true;
      }
      if (!usedAsFn && !otherUse) { path.remove(); changed++; }
      else if (!usedAsFn && otherUse) { /* keep */ }
    }
  });

  // c) fold !![] / ![] and concat (idempotent, cheap)
  traverse(ast, {
    UnaryExpression(path) { if (path.node.operator === '!' && t.isBooleanLiteral(path.node.argument)) { path.replaceWith(t.booleanLiteral(!path.node.argument.value)); changed++; } },
    BinaryExpression(path) { if (path.node.operator === '+' && t.isStringLiteral(path.node.left) && t.isStringLiteral(path.node.right)) { path.replaceWith(t.stringLiteral(path.node.left.value + path.node.right.value)); changed++; } }
  });

  changedTotal += changed;
  console.log('pass', pass, 'changed:', changed);
  if (changed === 0) break;
}

// ---------- 4. Remove dead obfuscator defs (top-level) ----------
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

// ---------- 5. Beautify member access / object keys ----------
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
  }
});

const out = generate(ast, {}).code;
fs.writeFileSync('./main.deobfuscated.js', out);
console.log('written ./main.deobfuscated.js bytes:', out.length);
