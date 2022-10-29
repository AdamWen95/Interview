var lengthOfLIS = function(nums) {
  const n = nums.length;
  if (n < 2) {
    return n;
  }
  //初始化填充1，每个元素都是一个单独的子序列
  const dp = Array(n).fill(1); 
  let max = 0;
  //dp[i]：以nums[i]结尾的上升子序列
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    if (dp[i] > max) {
      max = dp[i];
    }
  }
  return max;
}