// 给定一个二叉树，返回它 的后序遍历。 后序遍历：左，右，根

// 递归遍历
const postorderTraversal = function (root, array = []) {
  if (root) {
    postorderTraversal(root.left, array)
    postorderTraversal(root.right, array)

    array.push(root.val)
  }
  return array
}

// 非递归实现
const postorderTraversalUnRecur = function (root) {
  const _stack = []
  const _result = []

  let last = null // 标记上一个访问过的节点
  let current = root

  while (current || _stack.length > 0) {
    while (current) {
      _stack.push(current)
      current = current.left
    }

    current = _stack[_stack.length - 1]
    
    if (!current.right || current.right === last) {
      current = _stack.pop()
      _result.push(current.val)
      last = current
      current = null
    } else {
      current = current.right
    }
  }

  return _result
} 
