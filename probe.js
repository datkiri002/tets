const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const code = fs.readFileSync('./Shopkeeper Behavior Pack/Shopkeeper Behavior Pack/scripts/main.js', 'utf8');
const ast = parser.parse(code, { sourceType: 'module', errorRecovery: true });

// Find all top-level functions containing a big string array (decoder or array-fn)
const info = new Map();
traverse(ast, {
  FunctionDeclaration(path) {
    const n = path.node.id && path.node.id.name;
    if (!n || !/^_0x/.test(n)) return;
    if (path.parent.type !== 'Program' && path.parent.type !== 'ExportNamedDeclaration') return;
    let arr = null;
    const calls = [];
    path.traverse({
      ArrayExpression(p) { if (!arr && p.node.elements.length > 5) arr = p.node; },
      CallExpression(p) { if (p.node.callee.type === 'Identifier') calls.push(p.node.callee.name); }
    });
    if (!arr) return;
    // offset from first statement `param = param - NUM`
    let off = null;
    const first = path.node.body.body[0];
    if (first && first.expression && first.expression.right && first.expression.right.right) off = first.expression.right.right.value;
    info.set(n, { len: arr.elements.length, off, calls: [...new Set(calls)] });
  }
});
for (const [k, v] of info) console.log(k, 'len=' + v.len, 'off=' + v.off, 'calls=' + JSON.stringify(v.calls));
