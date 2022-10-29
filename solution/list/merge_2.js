// 合并2个升序链表
//递归
function mergeLists(l1, l2) {
  const merge = (l1, l2) => {
    //出口条件
    if (l1 === null) {
      return l2;
    }
    if (l2 === null) {
      return l1;
    }
    
    if (l1.val > l2.val) {
      l2.next = merge(l1, l2.next);
      return l2;
    } else {
      l1.next = merge(l1.next, l2);
      return l1;
    }
  }
  
  return merge(l1, l2);
}

//循环
function mergeLists(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  
  let dummyHead = new ListNode();
  let p = dummyHead;
  let p1 = l1, p2 = l2;
  
  //p的next指向小的值，p和p2(p1)向后移动一位
  while (p1 && p2) {
    if (p1.val > p2.val) {
      p.next = p2;
      p = p.next;
      p2 = p2.next;
    } else {
      p.next = p1;
      p = p.next;
      p1 = p1.next;
    }
  }
  //剩下的部分
  if (p1) {
    p.next = p1;
  } else {
    p.next = p2;
  }
  
  return dummyHead.next;
}