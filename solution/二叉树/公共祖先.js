function anc(root, a, b) {
  if (!root || a === root || b === root) {
    return root;
  }
  let left = anc(root.left, a, b);
  let right = anc(root.right, a, b);
  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }
  return root;
}