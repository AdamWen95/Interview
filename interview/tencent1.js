//实现超出整数存储范围的两个大正整­­数相加 function add(a, b) 。
//注意：参数 a 和 b 以及函数的返回值都是字符串。
function sum(a, b) {
  
  let length = Math.max(a.length, b.length);
  let distance = a.length - b.length;
  if (distance > 0) {
    a.padStart(length, '0');
  } else {
    b.padStart(length, '0');
  }
  let arr1 = a.split('');
  let arr2 = b.split('');
  let carry = 0;
  let res = [];
  for(let i = length - 1; i >= 0; i--) {
    let sum = parseInt(arr1[i]) + parseInt(arr2[i]) + carry;
    carry = sum >= 10 ? 1 : 0;
    sum = sum >= 10 ? sum - 10 : sum;
    res.unshift(sum);
  }
  if (carry) {
    res.unshift('1');
  }
  return res.join('').replace(/^0+/, '');
}

console.log(sum('99', '1'));


function quickSort(arr) {
  if(arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let arr1 = [];
  let arr2 = [];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > pivot) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  return quickSort(arr2).concat([pivot], quickSort(arr1));
}

console.log(quickSort([5, 77, 2, 56, 89]))