// 给定一个链表，判断链表中是否有环。

// 快慢指针
// slow每次走一步，fast每次走两步
// const hasCycleList = function(head) {
//   let slow = head;
//   let fast = head;

//   while(slow && fast && fast.next) {
//     slow = slow.next
//     fast = fast.next.next

//     if(slow === fast) return true
//   }

//   return false
// };

// 哈希表
// 缺点：需要额外的空间来存储访问过的节点
const hasCycleList = function(head) {
  if(!head) return false

  const map = new Map()
  let node = head;
  map.set(node, true)

  while(node.next) {
    // 判断哈希表是否已经存在链表节点
    if(map.get(node.next)) return true

    map.set(node.next, true)
    node = node.next
  }

  return false
};

