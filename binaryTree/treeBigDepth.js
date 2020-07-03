// 给定一个二叉树，找出其最大深度
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数
// 叶子节点是指没有子节点的节点

// 一棵二叉树的最大深度等于左子树深度和右子树最大深度的最大值 + 1
const treeBigDepth = function (root) {
  return !root ? 0 : Math.max(treeBigDepth(root.left), treeBigDepth(root.right)) + 1
}