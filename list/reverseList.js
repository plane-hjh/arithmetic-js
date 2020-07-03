// 反转一个单链表


const reverseList = function (head) {
  if (!head || !head.next) return head;

  let cur = head;
  let pre = null;

  while (head && head.next) {
    // 获取当前节点的下一个节点
    pre = head.next;

    // 使当前节点的下一个节点指向，下下个节点即：head.next = head.next.next
    head.next = pre.next;

    // 反转节点。使下一个节点的下个节点指向当前节点
    pre.next = cur;

    // 使下一个节点赋值为当前节点
    cur = pre;
  }

  return cur;
}

// const reverseList = function(head) {
//   if(!head || !head.next) return head

//   let pre = null
//   let cur = head

//   while (head && head.next) {
//     pre = head.next
//     head.next = pre.next
//     pre.next = cur
//     cur = pre
//   }

//   return cur
// }