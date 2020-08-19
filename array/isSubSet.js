// 两个顺序排列的数组A和B，数组成员均为数字，求B数组是否为A数字的子集。（数组内可能有重复的数字）

function isSubSet(arrA, arrB) {
  let m = arrA.length
  let n = arrB.length

  if(n > m) return false

  let i = 0, j = 0;

  while(i < m && j < n) {
    if(arrA[i] < arrB[j]) {
      i++
    } else if(arrA[i] === arrB[j]) {
      i++;
      j++;
    } else if(arrA[i] > arrB[j]){
      return false
    }
  }

  return j === n
}