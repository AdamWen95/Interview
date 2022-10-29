function solution(n) {
  if (!n) {
    return [];
  }
  let res = [];
  function helper(n, left, right, temp) {
    if (left === n && right === n) {
      res.push(temp);
      return;
    }
    if (left < right) {
      return;
    }
    if (left < n) {
      helper(n, left + 1, right, temp + '(');
    }
    if (right < n) {
      helper(n, left, right + 1, temp + ')');
    }
  }
  helper(n, 0, 0, '');
  return res;
}