// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 双重遍历
// const longestCommonPrefix = function() {
//   // 当字符串数组长度为 0 时则公共前缀为空，直接返回
//   if(strs.length === 0) return ""

//   let ans = strs[0]

//   for(let i = 1; i < strs.length; i++) {
//     let j = 0;
//     for(;j<ans.length && j < strs[i].length;j++) {
//       if(ans[j] != strs[i][j])
//           break;
//     }
//   ans = ans.substr(0, j);
//   if(ans === "")
//       return ans;
//   }
// }


// 首先利用sort的排序方法将数组按照编码排序，只需要校验array[0]和array[array.length-1]的值。
// 然后判断是否存在包含关系即array[0]包含于array[array.length-1]
// 最后对首尾两个值进行字符串匹配，得到公共前缀
const longestCommonPrefix = function(strs) {
  strs.sort()//按编码排序
  console.log(strs);
  if (strs.length === 0) return ''//空数组返回''
  var first = strs[0],
      end = strs[strs.length - 1]
  if(first === end || end.match(eval('/^' + first + '/'))){
      return first//first包含于end返回first
  }
  for(var i=0;i<first.length;i++){
      if(first[i] !== end[i]){
          return first.substring(0,i)//匹配失败时返回相应字符串
      }
  }
};

console.log(longestCommonPrefix(["flower","eee","flight"]))