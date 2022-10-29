function judge(num) {
  let arr = num.toString().split('');
  console.log(arr);
  if (arr[0] === '0' || arr[2] === '0' || arr[4] === '0') {
      return false;
  }
  let set = new Set(arr);
  if (set.size !== arr.length) {
      return false;
  }
  let n1 = (arr[0] + arr[1]) - 0;
  let n2 = (arr[2] + arr[3]) - 0;
  let n3 = (arr[4] + arr[5]) - 0;
  if (n1 + n2 === n3) {
      return true;
  }
  return false;
}

console.log(judge(156479));