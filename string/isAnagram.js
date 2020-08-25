// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false
// 说明:
// 你可以假设字符串只包含小写字母。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 比较排序后的结果
// var isAnagram = function(s, t) {
//     let sortStr = (str) => {
//         return str.split('').sort((a, b)=> a.localeCompare(b)).join('')
//     }
//     return sortStr(s) === sortStr(t)
// };

// 使用map结构
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const sMap = {}
  for (str of s) {
    sMap[str] ? sMap[str]++ : (sMap[str] = 1)
  }
  for (str of t) {
    if (str in sMap) {
      sMap[str]--
      sMap[str] === 0 && delete sMap[str]
    }
  }
  return Object.keys(sMap).length === 0
};