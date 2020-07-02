// 给定一个二叉树，检查它是否是镜像对称的

const isSymmetric = function (root) {
  return isSymmetricTree(root, root)
}

const isSymmetricTree = function(leftNode, rightNode) {
  if(!leftNode && !rightNode) return true

  if (!leftNode || !rightNode) return false

  if (leftNode.val != rightNode.val) return false

  return isSymmetricTree(leftNode.left, rightNode.right) && isSymmetricTree(leftNode.right, rightNode.left);
}


// 非递归
const isSymmetricTreeUnRecur = (root) => {
  if(root === null) return true

  const list = []

  list.push([root.left, root.right])

  while(list.length > 0) {
    const track = list.pop()

    // 左右节点不为空的时候
    if(track[0] !== null && track[1] !== null) {
      if(track[0].val !== track[1].val) return false
      
      // 左右节点相等的时候，比较子节点
      list.push([track[0].left, track[1].right])
      list.push([track[0].right, track[1].left])
    } else if((track[0] !== null && track[1] === null) || (track[0] === null && track[1] !== null)) {
      // 左右节点任一节点为空的时候
      return false
    }
  }
  return true
}