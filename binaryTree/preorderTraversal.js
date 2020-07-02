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
// 取跟节点为目标节点，开始遍历
// 1.访问目标节点
// 2.左孩子入栈 -> 直至左孩子为空的节点
// 3.节点出栈，以右孩子为目标节点，再依次执行1、2、3
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