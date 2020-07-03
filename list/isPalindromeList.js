// 请判断一个链表是否为回文链表。

// 找到链表的中间位置，以中间位置为分界线，反转前半部分，再用反转了的前半部分与后半部分做对比，如有不同就返回 false。
// 这一种做法虽然有两次遍历，但两次遍历的长度均为链表个数的一半，所以达到时间复杂度为 O(n)O(n)。
const isPalindrome = function(head) {
  if(head === null || head.next === null) return true;
  let mid = head;
  let pre = null;
  let reversed = null;
  // end每次走两格，这个循环的时间复杂度为O(n/2)
  while(head !== null && head.next !== null) {
      // 这个赋值要在mid被修改前提前
      pre = mid
      // 遍历链表
      mid = mid.next
      head = head.next.next
      // 反转前面部分的节点，并用reversed保存
      pre.next = reversed
      reversed = pre
  }
  // 奇数mid往后走一位
  if(head) mid = mid.next
  while(mid) {
      if(reversed.val !== mid.val) return false
      reversed = reversed.next
      mid = mid.next
  }
  return true
};