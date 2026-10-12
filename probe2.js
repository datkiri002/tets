const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const code = fs.readFileSync('./Shopkeeper Behavior Pack/Shopkeeper Behavior Pack/scripts/main.js', 'utf8');
const ast = parser.parse(code, { sourceType: 'module', errorRecovery: true });

// For each top-level function with params, print offset pattern + which array-fn it calls
traverse(ast, {
  FunctionDeclaration(path) {
    const n = path.node.id && path.node.id.name;
    if (!n || !/^_0x/.test(n)) return;
    if (path.parent.type !== 'Program' && path.parent.type !== 'ExportNamedDeclaration') return;
    if (path.node.params.length < 1) return;
    const first = path.node.body.body[0];
    let off = null;
    try { off = first.expression.right.right.value; } catch (e) {}
    const arrCalls = new Set();
    path.traverse({ CallExpression(p) {
      if (p.node.callee.type === 'Identifier' && /^_0x/.test(p.node.callee.name)) arrCalls.add(p.node.callee.name);
    }});
    console.log(n, 'off=' + off, 'calls=' + JSON.stringify([...arrCalls]));
  }
});
