// 中序遍历
const inorderTraversal = (root) => {
  if (!root) return [];
  const stack = [];
  const res = [];
  let cur = root;
  while (cur || stack.length !== 0) {
    // 左节点依次入栈
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    // 取出栈顶节点
    const node = stack.pop();
    res.push(node.val);
    // 若存在右节点，则cur指向该节点
    if (node.right) {
      cur = node.right;
    }
  }
  return res;
}

// 后序遍历
const postorderTraversal = (root) => {
  if (!root) return [];
  const res = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.unshift(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return res;
}

// 前序遍历
const preOrderTraversal = (root) => {
  if (!root) return [];
  const res = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    // 先后把右节点、左节点压入栈
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return res;
}
