const fs = require('fs');
const vm = require('vm');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const SRC = './Shopkeeper Behavior Pack/Shopkeeper Behavior Pack/scripts/main.js';
const code = fs.readFileSync(SRC, 'utf8');
const ast = parser.parse(code, { sourceType: 'module', errorRecovery: true });

// ---- helpers ----
const hexName = /^_0x[0-9a-f]{4,8}$/;

function findArrayAssignment(fnNode) {
  // returns ArrayExpression node of `const X=[...]` inside function body
  for (const st of fnNode.body.body) {
    if (t.isVariableDeclaration(st)) {
      for (const d of st.declarations) {
        if (t.isArrayExpression(d.init)) return d.init;
      }
    }
  }
  return null;
}

function findOffset(fnNode) {
  const first = fnNode.body.body[0];
  if (first && t.isExpressionStatement(first) && t.isAssignmentExpression(first.expression) &&
      first.expression.operator === '=' && t.isBinaryExpression(first.expression.right) &&
      first.expression.right.operator === '-' && t.isNumericLiteral(first.expression.right.right)) {
    return first.expression.right.right.value;
  }
  return null;
}

function getParamNames(fnNode) { return fnNode.params.map(p => p.name); }

// collect top-level info
const arrayFns = new Map();   // name -> ArrayExpression nodes (all occurrences incl. reassigned closures)
const decoderFns = new Map(); // name -> offset
const aliasMap = new Map();   // alias -> base
const shuffleIIFEs = [];      // {arrayFn, target, srcCode}

for (const node of ast.program.body) {
  if (t.isFunctionDeclaration(node) && node.id && hexName.test(node.id.name)) {
    const n = node.id.name;
    const arr = findArrayAssignment(node);
    if (arr) {
      if (!arrayFns.has(n)) arrayFns.set(n, []);
      arrayFns.get(n).push(arr);
    } else {
      const off = findOffset(node);
      if (off !== null && node.params.length >= 1) decoderFns.set(n, off);
    }
  }
  if (t.isVariableDeclaration(node)) {
    for (const d of node.declarations) {
      if (t.isIdentifier(d.init) && (decoderFns.has(d.init.name) || arrayFns.has(d.init.name))) {
        aliasMap.set(d.id.name, d.init.name);
      }
    }
  }
}

// find shuffle IIFEs at top level
for (const node of ast.program.body) {
  if (t.isExpressionStatement(node) && t.isCallExpression(node.expression) &&
      t.isFunctionExpression(node.expression.callee)) {
    const args = node.expression.arguments;
    if (args.length === 2 && t.isIdentifier(args[0]) && t.isNumericLiteral(args[1]) &&
        arrayFns.has(args[0].name)) {
      shuffleIIFEs.push({ arrayFn: args[0].name, target: args[1].value, src: generate(node).code });
    }
  }
}

console.log('arrayFns:', arrayFns.size, [...arrayFns.keys()].join(','));
console.log('decoders:', decoderFns.size);
console.log('aliases:', aliasMap.size);
console.log('shuffles:', shuffleIIFEs.length);

// resolve alias chain to base
function base(name) { let b = name; while (aliasMap.has(b)) b = aliasMap.get(b); return b; }

// map each shuffle to its decoder offset by looking at inner alias decls
const shuffleDecoder = new Map(); // arrayFn -> offset used in check expr
for (const s of shuffleIIFEs) {
  // parse the iife source to find `const X = <ident>` where ident resolves to a decoder
  const iast = parser.parse('(' + s.src.replace(/;$/, '') + ')', { allowReturnOutsideFunction: true });
  let off = null;
  traverse(iast, {
    VariableDeclarator(p) {
      if (t.isIdentifier(p.node.init)) {
        const b = base(p.node.init.name);
        if (decoderFns.has(b)) off = decoderFns.get(b);
      }
    },
    FunctionDeclaration(p) {
      const o = findOffset(p.node);
      if (o !== null) off = o; // inline decoder variant
    }
  });
  shuffleDecoder.set(s.arrayFn, off);
}

// Build raw arrays from AST literal elements (original order, pre-rotation)
const rawArrays = {};
for (const [name, arrNodes] of arrayFns) {
  rawArrays[name] = arrNodes[0].elements.map(e => e.type === 'StringLiteral' ? e.value : null);
}

// Custom-alphabet base64 decode (same as obfuscator's)
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

// Determine rotation count per arrayFn by replicating the shuffle loop logic.
// The loop rotates until decoded(checkExpr) values sum equals target. We can't easily eval the expr,
// so instead we execute the real shuffle IIFE in a vm with instrumented shift counting.
const rotatedArrays = {};
{
  // For each arrayFn that has a shuffle, run its shuffle in vm.
  // Need all array fns defined in the context (some may reference others? unlikely).
  for (const s of shuffleIIFEs) {
    const ctx = { parseInt, isNaN, Number, String, Math, JSON, decodeURIComponent, encodeURIComponent, console };
    vm.createContext(ctx);
    // define original array fn returning a fresh copy, plus instrumented wrapper
    const elems = JSON.stringify(rawArrays[s.arrayFn]);
    const setup = `
      var __data = ${elems};
      var __shiftCount = 0;
      function ${s.arrayFn}(){ 
        var a = __data.slice();
        Object.defineProperty(a,'shift',{value:function(){__shiftCount++;return Array.prototype.shift.call(this);},enumerable:false,writable:true,configurable:true});
        ${s.arrayFn} = function(){ return a; };
        return a;
      };`;
    try {
      vm.runInContext(setup + '\n' + s.src + '\nvoid 0;', ctx);
      const count = ctx.__shiftCount;
      const arr = ctx[s.arrayFn]();
      rotatedArrays[s.arrayFn] = arr;
      console.log('rotated', s.arrayFn, 'shifts=', count, 'len=', arr.length);
    } catch (e) {
      console.error('shuffle vm failed', s.arrayFn, e.message);
      rotatedArrays[s.arrayFn] = rawArrays[s.arrayFn].slice();
    }
  }
}
// arrays without shuffle keep original order
for (const name of Object.keys(rawArrays)) if (!rotatedArrays[name]) rotatedArrays[name] = rawArrays[name].slice();

// map decoder base -> arrayFn it uses (find identifier call inside decoder body referencing an arrayFn or alias)
const decoderArr = {};
traverse(ast, {
  FunctionDeclaration(path) {
    const n = path.node.id && path.node.id.name;
    if (!n || !decoderFns.has(n) || n in decoderArr) return;
    let found = null;
    path.traverse({
      CallExpression(p2) {
        if (p2.node.callee.type === 'Identifier') {
          const b = base(p2.node.callee.name);
          if (rotatedArrays[b]) found = b;
        }
      }
    });
    if (found) decoderArr[n] = { arrFn: found, offset: decoderFns.get(n) };
  }
});
console.log('decoder->array map:', Object.keys(decoderArr).length);

// resolve a decoder call value
function resolve(name, idx) {
  const b = base(name);
  const info = decoderArr[b];
  if (!info) return null;
  const arr = rotatedArrays[info.arrFn];
  const i = idx - info.offset;
  if (i < 0 || i >= arr.length) return null;
  const raw = arr[i];
  if (typeof raw !== 'string') return null;
  try { return b64decode(raw); } catch (e) { return null; }
}

// Replace calls
let replaced = 0, missed = 0;
traverse(ast, {
  CallExpression(path) {
    const c = path.node.callee;
    if (!t.isIdentifier(c)) return;
    const b = base(c.name);
    if (!decoderFns.has(b)) return;
    const args = path.node.arguments;
    if (args.length !== 1 || !t.isNumericLiteral(args[0])) return;
    const val = resolve(c.name, args[0].value);
    if (val === null) { missed++; return; }
    path.replaceWith(t.stringLiteral(val));
    replaced++;
  }
});
console.log('replaced:', replaced, 'missed:', missed);

// Cleanup: remove decoder/array/shuffle/alias top-level defs
traverse(ast, {
  ExportNamedDeclaration(path) {
    const d = path.node.declaration;
    if (d && t.isVariableDeclaration(d)) {
      for (const dd of d.declarations) {
        const nm = dd.id && dd.id.name;
        if (nm && (decoderFns.has(nm) || arrayFns.has(nm) || aliasMap.has(nm))) path.remove();
      }
    }
  },
  VariableDeclaration(path) {
    if (path.parentPath.isExportNamedDeclaration()) return;
    const names = path.node.declarations.map(d => d.id && d.id.name);
    if (names.every(n => n && (decoderFns.has(n) || arrayFns.has(n) || aliasMap.has(n)))) path.remove();
  },
  FunctionDeclaration(path) {
    const n = path.node.id && path.node.id.name;
    if (n && (decoderFns.has(n) || arrayFns.has(n))) path.remove();
  },
  ExpressionStatement(path) {
    const e = path.node.expression;
    if (t.isCallExpression(e) && t.isFunctionExpression(e.callee)) {
      const args = e.arguments;
      if (args.length === 2 && t.isIdentifier(args[0]) && arrayFns.has(args[0].name)) path.remove();
    }
  }
});

// Beautify member access / object keys / boolean folding / string concat
traverse(ast, {
  MemberExpression(path) {
    if (path.node.computed && t.isStringLiteral(path.node.property) && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(path.node.property.value)) {
      path.node.computed = false;
      path.node.property = t.identifier(path.node.property.value);
    }
  },
  ObjectProperty(path) {
    if (t.isStringLiteral(path.node.key) && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(path.node.key.value)) {
      path.node.key = t.identifier(path.node.key.value);
      path.node.computed = false;
    }
  },
  UnaryExpression(path) {
    if (path.node.operator === '!' && t.isBooleanLiteral(path.node.argument))
      path.replaceWith(t.booleanLiteral(!path.node.argument.value));
  },
  BinaryExpression(path) {
    if (path.node.operator === '+' && t.isStringLiteral(path.node.left) && t.isStringLiteral(path.node.right))
      path.replaceWith(t.stringLiteral(path.node.left.value + path.node.right.value));
  }
});

const out = generate(ast, {}).code;
fs.writeFileSync('./main.deobfuscated.js', out);
console.log('written ./main.deobfuscated.js bytes:', out.length);
