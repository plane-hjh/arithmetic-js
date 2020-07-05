// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。

const isPalindrome = function(s) {
  // 用正则将不是字母或数字的字符和空格去掉，并转小写
  str = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  // 设置头尾双指针，开启循环
  let l = 0, r = str.length - 1
  while (l < r) {
    // 如果指向的元素不同，则返回false
    if (str[l]!==str[r]) {
      return false
    }
    // 如果相同，移动指针，相互逼近，继续循环，直至指针相遇
    l++
    r--
  }
  return true
};