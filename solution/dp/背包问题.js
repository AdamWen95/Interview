function knapsack(weights, values, W) {
  let n = weights.length;
  let dp = new Array(n + 1).fill(0);
  dp[-1] = new Array(W + 1).fill(0);
  for(let i = 0; i < n; i++) {
    dp[i] = new Array(W + 1).fill(0);
    for(let j = 0; j <=W; j++) {
      if (j < weights[i]) { // 书包容量小于第i个的重量
        dp[i][j] = dp[i - 1][j]; //第i个不放入
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i]] + values[i])
      }
    }
  }
  return dp[n - 1][W];
}

var a = knapsack([2,2,6,5,4],[6,3,5,4,6],10);
console.log(a);