// 给定两个数组，编写一个函数来计算它们的交集。

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 存哈希表
const intersect = function (nums1, nums2) {
  let map = {}

  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] ? map[nums1[i]]++ : map[nums1[i]] = 1
  }

  let result = []
  for (let j = 0; j < nums2.length; j++) {
    if (map[nums2[j]] > 0) {
      result.push(nums2[j])
      map[nums2[j]]--
    }
  }

  return result
};

// 双指针
// const intersect = (nums1, nums2) => {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b); // 先排序，使得重复的元素相邻出现
//   const res = [];
//   let p1 = 0;                  // 两个指针
//   let p2 = 0;
//   while (p1 < nums1.length && p2 < nums2.length) { // 用&& 因为有一个越界了就不能找交集
//     if (nums1[p1] > nums2[p2]) {        // p1指向的数大，移动p2，期待遇到一样大的
//       p2++;
//     } else if (nums1[p1] < nums2[p2]) { // 类似
//       p1++;
//     } else {                   // 遇到相同的，推入res数组，两个指针同时移动考察下一个
//       res.push(nums1[p1]);
//       p1++;
//       p2++;
//     }
//   }
//   return res;
// };