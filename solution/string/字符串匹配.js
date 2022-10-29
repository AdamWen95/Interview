function compare(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  if (arr2.length > arr1.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if (i > arr1.length - arr2.length - 1) {
      break;
    }
    if (arr1[i] === arr2[0]) {
      let m = i;
      let flag = true;
      for(let j = 0; j < arr2.length; j++) {
        if (arr1[m] === arr2[j]) {
          m++;
        } else {
          flag = false;
          break;
        }
      }
      if (flag) {
        return true;
      }
    }
  }
  return false;
}

console.log(compare('aabbc', 'aabb'));