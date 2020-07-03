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
const inorderTravelUnRecur = function (root) {
  const _stack = []
  // 存放遍历后的数组
  const _result = []

  let current = root

  while (current || _stack.length > 0) {
    while (current) {
      // 进栈，第一个元素是根节点，最后一个是首先要遍历的左节点
      _stack.push(current)
      current = current.left
    }

    // 从栈内取出节点
    current = _stack.pop()
    _result.push(current.val)
    current = current.right
  }

  return _result
}