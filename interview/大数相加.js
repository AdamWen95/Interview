function bigSum(a, b) {
  a = '0' + a;
  b = '0' + b;
  let arr1 = a.split('');
  let arr2 = b.split('');

  let carry = 0; //进位
  let sum = 0;
  let res = [];
  
  let long = Math.max(arr1.length, arr2.length);
  let dis = arr1.length - arr2.length;
  if (dis > 0) {
    for(let i = 0; i < dis; i++) {
      arr2.unshift('0');
    }
  } else {
    for(let i = 0; i < Math.abs(dis); i++) {
      arr1.unshift('0');
    }
  }

  for(let i = long - 1; i >= 0; i--) {
    sum = parseInt(arr1[i]) + parseInt(arr2[i]) + carry;
    carry = sum >= 10 ? 1 : 0;
    sum = sum >= 10 ? sum - 10 : sum;
    res.unshift(sum);
  }
  if (carry) {
    res.unshift('1');
  }

  return res.join('').replace(/^0/, '')
}