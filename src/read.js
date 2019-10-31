const recast = require("recast");
const TNT = recast.types.namedTypes


recast.run(function(ast, printSource) {
  recast.visit(ast, {
    visitExpressionStatement: function(path) {
      const node = path.node
      // 判断是否为ExpressionStatement，正确不输出，错误则全局报错
      console.log(TNT.ExpressionStatement.assert(node))
      this.traverse(path);
    }
  });
});
