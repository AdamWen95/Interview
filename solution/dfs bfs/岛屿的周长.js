function landPerimeter(grid) {
  //每一个岛+4；每一个重复边界-2
  let land = 0;
  let border = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        land++;
        if (i < grid.length - 1 && grid[i + 1][j] === 1) {
          border++;
        }
        if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
          border++;
        }
      }
    }
  }
  return land * 4 - border *2;
}