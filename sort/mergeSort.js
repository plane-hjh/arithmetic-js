// 归并排序和快排的思路类似，都是递归分治，区别在于快排边分区边排序，而归并在分区完成后才会排序

function merge (left, right) {
  let result = []

  while(left.length > 0 && right.length > 0) {
      result.push(left[0] < right[0] ? left.shift() : right.shift())
  }

  return result
}

function mergeSort(arr) {
  if(arr.length === 1) return arr

  let middle = Math.floor(arr.length/2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

// 时间复杂度 O(nlogn)
// 空间复杂度 O(nlogn)