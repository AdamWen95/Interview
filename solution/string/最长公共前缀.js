function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }
  let res = strs[0];
  for(let i = 1; i < strs.length; i++) {
    let j = 0; //j要在这定义，不然13行取不到j的值
    for(; j < res.length && j < strs[i].length; j++) {
      if (res[j] !== strs[i][j]) {
        break;
      }
    }
    res = res.substr(0, j);
    if (res === '') {
      return res;
    }
  }
  return res;
}