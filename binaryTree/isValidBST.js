// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

// 后序遍历
const isValidBST = function (root) {
  let stack = []
  let inorder = -Infinity

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder) return false;
    inorder = root.val;
    root = root.right;
  }
  return true;
}