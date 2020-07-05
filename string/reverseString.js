// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

 // 直接api
// const reverseString = function(s) {
//   return s.reverse();
// };

// 双指针
const reverseString = (s) => {
  let i = 0,
      x = s.length - 1

  while(i < x) {
    [s[i], s[x]] = [s[x], s[i]]

    i++
    x--
  }
}