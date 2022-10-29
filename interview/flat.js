// 数组拍平
function flat(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
          res = res.push(flat(array[i]));
      } else {
          res.push(array[i])
      }
  }
  return res;
}

//指定深度 使用reduce
function flat(array, deep = 1) {
  return array.reduce((pre, cur) => {
      return Array.isArray(cur) && deep > 1 ? 
            pre.concat(flat(cur, deep - 1)) :
          pre.concat(cur)
  }, [])
}