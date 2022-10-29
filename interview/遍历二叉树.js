//中序
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};

//后序
function post(root) {
  const stack = [];
  const res = [];
  let cur = root;
  let last = null;
  while(cur || stack.length > 0) {
    while(cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack[stack.length - 1];
    if (cur.right === last || !cur.right) {
      cur = stack.pop();
      res.push(cur.val);
      last = cur;
      cur = null;
    } else {
      cur = cur.right;
    }
  }

  return res;
}