//非原地
function quickSort(arr) {
  if (arr.length <2) {
    return arr;
  }
  let left = [], right = [];
  let target = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < target) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([target], quickSort(right));
}

let arr = [1,4,6,22,3,5,67,34];
console.log(quickSort(arr));

//原地
function helper(arr, left, right) {
  let pivotVal = arr[left];
  while(left < right) {
    while(left < right && arr[right] >= pivotVal) {
      right--;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
    while(left < right && arr[left] <= pivotVal) {
      left++;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  return left;
}

function quickSort(arr, left, right) {
  if (left < right) {
    let pivot = helper(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}