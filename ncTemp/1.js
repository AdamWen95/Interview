//全排列-数组
function permutations( arr ) {
let res = [];
let used = [];
function helper(nums) {
  let num;
  for(let i = 0; i < nums.length; i++) {
    num = nums.splice(i, 1)[0];
    used.push(num);
    if (nums.length === 0) {
      res.push(used.slice());
    }
    helper(nums);
    nums.splice(i, 0, num); //加回去
    used.pop();
  }
  return res;
}
return helper(arr);
}
let a = permutations([1,2,3]);
console.log(a);