// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的

// 递归
// 拿两个链表的头结点做比较，取较小的节点作为头结点，头结点（较小的节点）的next则等于小节点的next和大节点之间比较的较小值，依次递归。最后返回头结点。
const mergeTwoLists = function(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  let head = null

  if (l1.val < l2.val) {
    // 链表一排前面
    head = l1

    // 递归
    head.next = mergeTwoLists(l1.next, l2)
  } else {
    // 链表2先排前面
    head = l2

    // 继续递归
    head.next = mergeTwoLists(l1, l2.next)
  }

  return head 
}