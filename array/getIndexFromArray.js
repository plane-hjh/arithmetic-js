// int a[]={21,11,45,56,9,66,77,89,78,68,100,120,111} 请查询数组中有没有比它前面元素都大,比它后面的元素都小的数,没有打印-1,有显示其索引。要求时间复杂度和空间复杂度最大都是O(N)

const getIndexFromArray = (arr) => {
  let len = arr.length

  let rightMinArr = new Array({length: len})

  rightMinArr[len - 1] = arr[len - 1]

  for(let i = len - 2; i >= 0; i--) {
    rightMinArr[i] = arr[i] < rightMinArr[i + 1] ? arr[i] : rightMinArr[i + 1]
  }

  let result = []
  let leftMax = Number.MIN_SAFE_INTEGER
  for(let j = 0; j < len; j++) {
    if(arr[j] > leftMax) {
      leftMax = arr[j]
      
      if(leftMax === rightMinArr[j]){
        result.push(leftMax)
      }
    }
  }

  return result.length > 0 ? result : -1
}

console.log(getIndexFromArray([21,11,45,56,9,66,77,89,78,68,100,120,111]));