function isSub(a, b) {
  if (!a || !b) {
    return false;
  }
  return isSame(a, b) || isSub(a.left, b) || isSub(a.right, b);
}

function isSame(a, b) {
  if (!b) {
    return true;
  }
  if (!a) {
    return false;
  }
  if (a.val !== b.val) {
    return false;
  }
  return isSame(a.left, b.left) && isSame(a.right, b.right);
}