const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const SRC = './Shopkeeper Behavior Pack/Shopkeeper Behavior Pack/scripts/main.js';
let code = fs.readFileSync(SRC, 'utf8');

// 1. Parse to find decoder functions + array funcs + aliases (top-level)
const ast = parser.parse(code, { sourceType: 'module', errorRecovery: true });

const decoders = new Map();   // name -> {offset}
const arrayFuncs = new Set(); // names of array-returning functions
const aliases = new Map();    // alias -> base

for (const node of ast.program.body) {
  if (t.isFunctionDeclaration(node) && node.id) {
    const n = node.id.name;
    const params = node.params.map(p => p.name);
    // array func: function F(){const x=[...];F=function(){return x};return F()}
    if (params.length === 0 && /_0x[0-9a-f]{6}/.test(n)) {
      const body = node.body.body;
      const hasArr = body.some(s => t.isVariableDeclaration(s) &&
        s.declarations.some(d => t.isArrayExpression(d.init)));
      if (hasArr) arrayFuncs.add(n);
    }
    // decoder: function D(a,b){ a = a - NUM; ... }
    const fbody = node.body.body;
    if (params.length >= 1 && fbody.length) {
      const first = fbody[0];
      if (t.isExpressionStatement(first) && t.isAssignmentExpression(first.expression) &&
          first.expression.operator === '=' &&
          t.isBinaryExpression(first.expression.right) &&
          first.expression.right.operator === '-' &&
          t.isNumericLiteral(first.expression.right.right)) {
        decoders.set(n, { offset: first.expression.right.right.value });
      }
    }
  }
  if (t.isVariableDeclaration(node) && node.declarations.length === 1) {
    const d = node.declarations[0];
    if (d.id.name && t.isIdentifier(d.init) && (decoders.has(d.init.name) || arrayFuncs.has(d.init.name))) {
      aliases.set(d.id.name, d.init.name);
    }
  }
}

console.log('decoders:', [...decoders.keys()].join(','));
console.log('arrayFuncs:', [...arrayFuncs].join(','));
console.log('aliases:', aliases.size);

// 2. Extract the string arrays by evaluating their source in a sandbox
const vm = require('vm');
const arrSources = {};
traverse(ast, {
  FunctionDeclaration(path) {
    const n = path.node.id && path.node.id.name;
    if (n && arrayFuncs.has(n) && !(n in arrSources)) {
      arrSources[n] = generate(path.node).code;
    }
  }
});

const arrays = {};
for (const [name, src] of Object.entries(arrSources)) {
  try {
    const ctx = {};
    vm.createContext(ctx);
    arrays[name] = vm.runInContext(src + '\n' + name + '()', ctx);
  } catch (e) {
    console.error('array eval failed for', name, e.message);
  }
}

// 3. Resolve rotation: simulate the shuffling IIFE
// Pattern: (function(_0xA,_0xB){const _0xC=<decoder>;const _0xD=_0xA();while(...)...})(<arrayFn>, <checkNum>)
const rotations = {}; // arrayFnName -> number of shifts applied
traverse(ast, {
  CallExpression(path) {
    const callee = path.node.callee;
    if (!t.isFunctionExpression(callee)) return;
    const args = path.node.arguments;
    if (args.length !== 2 || !t.isIdentifier(args[0]) || !t.isNumericLiteral(args[1])) return;
    const fnArrayName = args[0].name;
    if (!arrays[fnArrayName]) return;
    const checkTarget = args[1].value;
    // find inner decoder alias used: const X = <decoderRef>
    let decoderName = null;
    for (const st of callee.body.body) {
      if (t.isVariableDeclaration(st)) {
        for (const dd of st.declarations) {
          if (t.isIdentifier(dd.init) && (decoders.has(dd.init.name) || aliases.has(dd.init.name))) {
            decoderName = dd.init.name;
          }
        }
      }
    }
    // We need the actual decoder base name & offset
    let base = decoderName;
    while (base && aliases.has(base)) base = aliases.get(base);
    if (!base || !decoders.has(base)) return;
    const offset = decoders.get(base).offset;
    const arr = arrays[fnArrayName].slice();
    const decFn = (idx) => {
      const raw = arr[idx - offset];
      return raw;
    };
    // Simulate the loop: evaluate the sum expression by parsing it from source
    const srcCode = generate(callee).code;
    // Build a safe evaluator: replace parseInt(X(N)/M) etc. Actually easier: re-run the whole IIFE in vm with our own counter.
    // Instead of full simulation, brute-force: rotate until the decoded expression equals target.
    // We replicate the exact expression using Function() with a get() helper.
    // Extract the try-block expression:
    const m = srcCode.match(/try\{([\s\S]*?)\}catch/);
    if (!m) return;
    let exprSrc = m[1];
    // "const _0x490662=-parseInt(_0x3f636a(115))/1*...if(...)break;else push shift"
    const assignMatch = exprSrc.match(/^const ([^=]+)=([\s\S]*?);if\(/);
    if (!assignMatch) return;
    let expr = assignMatch[2];
    // Replace decoder calls with numeric lookup into rotated array + base64-decode needed? The sum uses parseInt on decoded strings which are numbers-in-base64... risky.
    // Simpler approach: run the real thing in vm with instrumented array push/shift to count rotations.
    const ctx = {};
    vm.createContext(ctx);
    const wrapped = `
      var __rot = 0;
      ${arrSources[fnArrayName]}
      var __arr = ${fnArrayName}();
      var __origPush = Array.prototype.push.call.bind(Array.prototype.push);
      ${srcCode.replace(/var __rot = 0;/g,'')}
    `;
    // Too fragile. Use direct instrumentation instead below.
  }
});

// --- Direct instrumentation approach for rotation ---
// Re-parse and for each shuffle IIFE, execute it in vm but hook the specific array instance's push/shift.
for (const pathNode of ast.program.body) {
  if (t.isExpressionStatement(pathNode) && t.isCallExpression(pathNode.expression) &&
      t.isFunctionExpression(pathNode.expression.callee)) {
    const args = pathNode.expression.arguments;
    if (args.length !== 2 || !t.isIdentifier(args[0]) || !t.isNumericLiteral(args[1])) continue;
    const fnName = args[0].name;
    if (!arrSources[fnName]) continue;
    const target = args[1].value;
    const srcCode = generate(pathNode).code;
    const ctx = { parseInt, String, Number, decodeURIComponent, encodeURIComponent, Math, JSON, console };
    vm.createContext(ctx);
    // define array fn + a wrapper that instruments the returned array
    const setup = `${arrSources[fnName]}
      var __shiftCount = 0;
      var __real = ${fnName};
      var ${fnName} = function(){ 
        var a = __real();
        var origShift = a.shift.bind(a);
        a.shift = function(){ __shiftCount++; return origShift(); };
        return a;
      };`;
    try {
      vm.runInContext(setup + '\n' + srcCode + '\n__shiftCount;', ctx);
      rotations[fnName] = ctx.__shiftCount;
      arrays[fnName] = vm.runInContext(`${fnName}()`, ctx); // post-rotation array
      console.log('rotation', fnName, ctx.__shiftCount);
    } catch (e) {
      console.error('shuffle sim failed for', fnName, e.message);
    }
  }
}

// 4. Now build resolver: decoderName -> {arrFn, offset}
// Determine arrFn referenced inside each decoder: pattern const X = ARRNAME();
const decoderInfo = {};
traverse(ast, {
  FunctionDeclaration(path) {
    const n = path.node.id && path.node.id.name;
    if (n && decoders.has(n) && !(n in decoderInfo)) {
      let arrFn = null;
      traverse(path.scope.block, {
        CallExpression(p2) {
          if (p2.node.callee.type === 'Identifier' && arrays[p2.node.callee.name]) {
            arrFn = p2.node.callee.name;
          }
        },
        noScope: true
      });
      if (arrFn) decoderInfo[n] = { arrFn, offset: decoders.get(n).offset };
    }
  }
});

// Base64 custom-alphabet decode + URI decode (same as decoder's inner function)
function b64decode(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
  let out = '';
  for (let i = 0, acc = 0, bits = 0, chr; chr = str.charAt(i++); ~chr && (acc = i % 4 ? acc * 64 + chr : chr, i % 4) ? out += String.fromCharCode((255 & acc) << ((-2 * i) & 6)) : 0) {
    chr = alpha.indexOf(chr);
  }
  let uri = '';
  for (let j = 0; j < out.length; j++) uri += '%' + ('00' + out.charCodeAt(j).toString(16)).slice(-2);
  return decodeURIComponent(uri);
}

function resolveCall(name, idx) {
  // follow alias chain
  let base = name;
  while (aliases.has(base)) base = aliases.get(base);
  const info = decoderInfo[base];
  if (!info) return null;
  const arr = arrays[info.arrFn];
  if (!arr) return null;
  const raw = arr[idx - info.offset];
  if (typeof raw !== 'string') return null;
  try { return b64decode(raw); } catch (e) { return null; }
}

// 5. Replace all decoder call expressions with string literals
let replaced = 0, missed = 0;
traverse(ast, {
  CallExpression(path) {
    const c = path.node.callee;
    if (!t.isIdentifier(c)) return;
    let base = c.name;
    while (aliases.has(base)) base = aliases.get(base);
    if (!decoders.has(base)) return;
    const args = path.node.arguments;
    if (args.length !== 1 || !t.isNumericLiteral(args[0])) return;
    const val = resolveCall(c.name, args[0].value);
    if (val === null) { missed++; return; }
    path.replaceWith(t.stringLiteral(val));
    replaced++;
  }
});

console.log('replaced:', replaced, 'missed:', missed);

// 6. Simplify computed member access obj["prop"] -> obj.prop when valid identifier
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
  }
});

// 7. Fold !![] / ![] and simple string concat chains
traverse(ast, {
  UnaryExpression(path) {
    if (path.node.operator === '!' && t.isBooleanLiteral(path.node.argument)) {
      path.replaceWith(t.booleanLiteral(!path.node.argument.value));
    }
  },
  BinaryExpression(path) {
    if (path.node.operator === '+' && t.isStringLiteral(path.node.left) && t.isStringLiteral(path.node.right)) {
      path.replaceWith(t.stringLiteral(path.node.left.value + path.node.right.value));
    }
  }
});

// 8. Remove the now-dead decoder/array/shuffle top-level statements
traverse(ast, {
  VariableDeclarator(path) {
    const n = path.node.id.name;
    if (n && (decoders.has(n) || arrayFuncs.has(n) || aliases.has(n)) &&
        path.container && path.parentPath.node.declarations.length === 1) {
      path.parentPath.remove();
    }
  },
  FunctionDeclaration(path) {
    const n = path.node.id && path.node.id.name;
    if (n && (decoders.has(n) || arrayFuncs.has(n))) path.remove();
  },
  ExpressionStatement(path) {
    const e = path.node.expression;
    if (t.isCallExpression(e) && t.isFunctionExpression(e.callee)) {
      // shuffle IIFEs referencing array fns
      const args = e.arguments;
      if (args.length === 2 && t.isIdentifier(args[0]) && arrayFuncs.has(args[0].name)) path.remove();
    }
  }
});

const out = generate(ast, { compact: false, retainLines: false }).code;
fs.writeFileSync('./main.deobfuscated.js', out);
console.log('written main.deobfuscated.js bytes:', out.length);
