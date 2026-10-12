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

// ---------- 2. Execute ALL top-level statements in a VM sandbox ----------
// Replace import declarations with stubs so the module can run.
const ctx = vm.createContext({
  console, parseInt, isNaN, Number, String, Math, JSON, Date, Object, Array, RegExp, Error,
  decodeURIComponent, encodeURIComponent, TypeError, WeakSet, Symbol, Reflect, Proxy, Set, Map, Promise
});

// stub @minecraft/server exports
const worldStub = {
  sendMessage: () => {}, getDimensionIds: () => [], getEntities: () => [],
  getItemTypes: () => [], getBlockTypes: () => [],
  system: { run: f => undefined, runTimeout: () => undefined, runInterval: () => undefined, afterEvents: {}, beforeEvents: {} },
  events: {},
};
ctx.__stub = { world: worldStub, ItemTypes: { getAll: () => [] }, BlockTypes: { getAll: () => [] },
  system: worldStub.system, Events: {}, EventSeverity: {}, DisplaySlotId: {}, GameMode: {},
  ItemStack: class {}, EntityComponentTypes: {}, EnchantmentTypes: { getAll: () => [] },
  worldAfterEvents: {}, systemBeforeEvents: {}, systemAfterEvents: {} };

let executed = 0, failed = 0;
for (const node of ast.program.body) {
  let srcCode;
  try {
    if (t.isImportDeclaration(node)) {
      // rewrite: import {world, ItemTypes, BlockTypes} from "@minecraft/server"  ->  const {..} = __stub
      const names = node.specifiers.filter(s => t.isImportSpecifier(s)).map(s => s.local.name);
      const defNames = node.specifiers.filter(s => t.isImportDefaultSpecifier(s)).map(s => s.local.name);
      const all = [...names, ...defNames];
      srcCode = `const {${all.join(',')}} = __stub;`;
    } else {
      srcCode = generate(node).code;
    }
    vm.runInContext(srcCode, ctx);
    executed++;
  } catch (e) {
    failed++;
    if (failed <= 10) console.error('exec fail:', e.message.slice(0, 120), '|', srcCode ? srcCode.slice(0, 80) : '');
  }
}
console.log('top-level executed:', executed, 'failed:', failed);

// ---------- 3. Read rotated arrays from the sandbox ----------
const rotatedArrays = {};
for (const name of arrayFnNodes.keys()) {
  try { rotatedArrays[name] = vm.runInContext(`${name}().slice()`, ctx); }
  catch (e) { console.error('cannot read array', name, e.message); }
}
console.log('arrays read:', Object.keys(rotatedArrays).length, Object.entries(rotatedArrays).map(([k,v])=>`${k}:${v.length}`).join(','));

// ---------- 4. Build decoder->array map & offsets from AST ----------
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
    if (c.type === 'Identifier' && rotatedArrays[base(c.name)]) arrFn = base(c.name);
  }, noScope: true });
  if (off !== null && arrFn) decoderInfo[n] = { arrFn, offset: off };
}
console.log('decoderInfo:', Object.keys(decoderInfo).length, '/', decoderFnNodes.size);

// ---------- 5. Verify live decoder matches our resolution ----------
function resolveLocal(name, idx) {
  const info = decoderInfo[base(name)];
  if (!info) return null;
  const v = rotatedArrays[info.arrFn][idx - info.offset];
  return typeof v === 'string' ? v : null;
}
{
  let ok = 0, bad = 0;
  for (const bn of Object.keys(decoderInfo)) {
    const off = decoderInfo[bn].offset;
    for (const delta of [0, 7, 33]) {
      try {
        const live = vm.runInContext(`${bn}(${off + delta})`, ctx);
        const mine = resolveLocal(bn, off + delta);
        if (live === mine) ok++; else { bad++; if (bad < 5) console.log('MISMATCH', bn, off + delta, JSON.stringify(live), JSON.stringify(mine)); }
      } catch (e) { bad++; }
    }
  }
  console.log('verify ok:', ok, 'bad:', bad);
}

// ---------- 6. Replace decoder calls with literals ----------
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

// ---------- 7. Remove dead obfuscator defs ----------
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
    const e = path.node.expression;
    if (shuffleStmts.includes(path.node)) path.remove();
  }
});

// ---------- 8. Beautify ----------
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
