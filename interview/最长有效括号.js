var longestValidParentheses = function(s) {
  const stack = [];
  let res = 0;
  stack.push(-1); //初始化-1作为分割符

  for(let i = 0; i < s.length; i++) {
    if (s[i] === '(') { //左括号入栈
      stack.push(i); //存的是索引值
    } else {
      stack.pop(); //右括号出栈
      if (stack.length === 0) {
        stack.push(i); //当栈为空时且当前扫描到的符号是')'时，需要将这个符号入栈作为分割符
      } else {
        res = Math.max(res, i - stack[stack.length - 1]); //计算两个括号之间的长度
      }
    }
  }
  return res;
};