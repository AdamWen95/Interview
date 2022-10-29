//自上而下递归
function mergeKLists(lists) {

  const mergeTwoLists = (l1, l2) => {/*合并两个链表的代码*/};
  
  const _mergeLists = (lists, start, end) => {
    if (end < start) {
      return null;
    }
    if (end === start) {
      return lists[end];
    }
    let mid = Math.floor(start + (end - start) / 2);
    return mergeTwoLists(_mergeLists(lists, start, mid), _mergeLists(llists, mid + 1, end));
  }
  return _mergeLists(lists, 0, lists.length - 1);
}

//自下而上
function mergeKLists(lists) {
  const mergeTwoLists = (l1, l2) => {/*合并两个链表的代码*/};
  
  if (!lists || !lists.length) {
    return null;
  }
  
  //初始化虚拟头指针集合
  let dummyHeads = [];
  for (let i = 0; i < lists.length; i++) {
    let node = new ListNode();
    node.next = lists[i];
    dummyHeads[i] = node;
  }
  
  //归并思想，自下而上合并
  for (let size = 1; size < lists.length; size += size) {
    for (let i = 0; i + size < lists.length; i += 2 * size) {
      dummyHeads[i].next = mergeTwoLists(dummyHeads[i].next, dummyHeads[i + size].next);
    }
  }
  return dummyHeads[0].next;
}