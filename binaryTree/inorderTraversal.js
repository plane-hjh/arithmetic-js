// 给定一个二叉树，返回它的中序遍历，中序遍历：左，根，右

// 递归
const inorderTraversal = function (root, array) {
  if (root) {
    inorderTraversal(root.left, array)
    array.push(root.val)
    inorderTraversal(root.right, array)
  }

  return array
}

// 非递归
// 左节点进栈，直至左节点为空的节点
// 节点出栈，访问该节点
// 右节点依次重复
const inorderTravelUnRecur = function (root) {
  const _stack = []
  // 存放遍历后的数组
  const _result = []

  let current = root

  while (current || _stack.length > 0) {
    while (current) {
      _stack.push(current)
      current = current.val
    }

    current = _stack.pop()
    _result.push(current.val)
    current = current.right
  }
}