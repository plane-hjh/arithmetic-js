// 给定一个二叉树，返回它的 前序 遍历。 前序遍历：根，左，右

// 递归实现
const preorderTraversal = function (root, array = []) {
  if (root) {
    array.push(root.val)
    preorderTravel(root.left, array)
    preorderTravel(root.right, array)
  }

  return array
}

// 非递归实现
const preorderTraversalUnRecur = function (root) {
  const _stack = []
  const _result = []

  let current = root

  while (current || _stack.length > 0) {
    while (current) {
      _result.push(current.val)
      _stack.push(current)
      current = current.left
    }

    current = _stack.pop()
    current = current.right
  }

  return _result
}