var lengthOfLIS = function(nums) {
  //1. 当 nums[i] > nums[j] 时
  //直接将nums[i]拼接到dp[j]后面形成新的dp[i] = dp[j] + 1
  //2. 当 nums[i] <= nums[j] 时
  //将nums[i] 替换dp[j] 对应的数组中第一个大于nums[i]的数如nums[r] => 用二分查找
  let n = nums.length;
  if (n < 2) {
    return n;
  }
  let arr = new Array(n);
  arr[0] = nums[0];
  let end = 0;
  for(let i = 1; i < n; i++) {
    if (nums[i] > arr[end]) {
      end++;
      arr[end] = nums[i];
    } else {
      let left = 0;
      let right = end;
      while(left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      arr[left] = nums[i];
    }
  }
  return end + 1;
}