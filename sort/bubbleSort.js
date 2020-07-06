// 冒泡排序

function bubbleSort(arr){
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}

// 改进一，如果已经是排序好的数组，那么没必要再遍历了
function bubbleSort2(arr) {
	console.time('冒泡排序耗时');
	let len = arr.length
	let isSort = true
	for(let i = 0; i < len; i++) {
		for(let j = 0; j < len - i - 1; j++) {
			if(arr[j] > arr[j+1]) {
				isSort = false
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
			}
		}
		if(isSort) break
	}
	console.timeEnd('冒泡排序耗时');
	return arr
}

// 改进2 假如说后面的已经排好序了
function bubbleSort3(arr) {
	console.time('改进后冒泡排序耗时');
	let i = arr.length - 1

	while(i > 0) {
		let pos = 0;	// 每趟开始时，无记录交换
		for(let j = 0; j < i; j++) {
			if(arr[j] > arr[j+1]) {
				pos = j;
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
			}
		}
		i = pos
	}
	console.timeEnd('改进后冒泡排序耗时');
    return arr;
}