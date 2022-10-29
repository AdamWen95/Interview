function permute(nums) {
  function dfs(path) {
    if (path.length === nums.length) {
      res.push(path.slice());
    }

    for(let item of nums) {
      if (path.includes(item)) {
        continue;
      }
      path.push(item);
      dfs(path);
      path.pop();
    }
  }

  let res = [], path = [];
  dfs(path);
  return res;
}