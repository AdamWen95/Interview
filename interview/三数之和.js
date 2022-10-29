// 三数之和
const threeNumSum = (nums) => {
  const res = [];
  if (!nums || nums.length < 3) return res;

  nums.sort((a, b)=> a - b); // 排序

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i-1])  continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while(left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while(left < right && nums[right] === nums[tight - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum > 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}

console.log(threeNumSum([-1, -4, 2,4,6,8,9,3,5,23,34,13, -12,-13,-19,0,-3,-6]));

// 最接近的三数之和
// 固定一个数，剩下两个数就变成了 双指针
const threeSumClosest = (nums, target) => {
  const len = nums.length;
  let res = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return res;

}
