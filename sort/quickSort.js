// 快排基本步骤
// 1. 选取基准元素
// 2. 比基准元素小的元素放到左边，大的放到右边
// 3. 在左右子数组中重复步骤一二，直到数组只剩下一个元素
// 4. 向上逐级合并数组

// function quickSort(arr) {
//   // 直到数组只剩下一个元素
//   if(arr.length <= 1) return arr

//   const leftArr = []
//   const rightArr = []

//   // 1. 选取中间位置基准元素
//   const pivot = Math.floor(arr.length / 2)       //基准点
//   const pivotValue = arr.splice(pivot, 1)[0]

//   arr.forEach(val => {
//     // 比基准元素小的元素放到左边，大的放到右边
//     val > pivotValue ? rightArr.push(val) : leftArr.push(val)
//   })

//   // 在左右子数组中重复步骤一二
//   return [ ...quickSort(leftArr), pivotValue, ...quickSort(rightArr)]
// }

// 快排的优化
// 定义一个pos指针, 标识等待置换的元素的位置, 然后逐一遍历数组元素, 遇到比基准数小的就和arr[pos]交换位置, 然后pos++
function quickSort(arr, left, right) {
  //这个left和right代表分区后“新数组”的区间下标，因为这里没有新开数组，所以需要left/right来确认新数组的位置
  if(left < right) {
    //pos即“被置换的位置”，第一趟为-1
    let pos = left - 1
    //循环遍历数组，置换元素
    for(let i = left; i <= right; i++) {
      //选取数组最后一位作为基准数，
      let pivot = arr[right]

      //若小于等于基准数，pos++，并置换元素, 这里使用小于等于而不是小于, 其实是为了避免因为重复数据而进入死循环
      if(arr[i] <= pivot) {
        pos++

        // 交换元素
        [arr[pos], arr[i]] = [arr[i], arr[pos]]
      }
    }

    //一趟排序完成后，pos位置即基准数的位置，以pos的位置分割数组
    quickSort(arr, left, pos - 1)
    quickSort(arr, pos + 1, right)
  }

  return arr      //数组只包含1或0个元素时(即left>=right)，递归终止
}


// 时间复杂度 O(nlogn)
// 空间复杂度 O(logn)~O(n)