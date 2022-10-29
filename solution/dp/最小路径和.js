function minPathSum(grid) {
  //当前项最小路径和 = 当前项值 + 上项或左项中的最小值
  let row = grid.length;
  let col = grid[0].length;

  //第一列
  for(let i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  //第一行
  for(let i = 1; i < col; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for(let i = 1; i < row; i++) {
    for(let j = 1; j < col; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[row - 1][col - 1];
}