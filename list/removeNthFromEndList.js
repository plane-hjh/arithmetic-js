// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 双指针
// fast 快指针提前走 n+1 步
// slow 指针指向当前距离 fast 倒数第 n 个节点， 初始为 head

// 添加preHead 节点
const removeNthFromEnd = function(head, n) {
  let preHead = new ListNode(0)
  preHead.next = head

  let fast = preHead, slow = preHead

  // 快走n+1步
  while(n--) {
    fast = fast.next
  }

  while(fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return preHead.next
};

// 单独处理倒数第n个节点
// const removeNthFromEnd = function(head, n) {
//   let fast = head, slow = head

//   // 先走n步
//   while(--n) {
//     fast = fast.next
//   }

//   // 链表的长度刚好是n的时候
//   if(!fast.next) return head.next

//   fast = fast.next
//   while (fast && fast.next) {
//     fast = fast.next
//     slow = slow.next
//   }

//   slow.next = slow.next.next
//   return head
// }