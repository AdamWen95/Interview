function decodeString(s) {
  let countStack = []; //存放 重复次数 栈
  let strStack = []; //存放 字符串 栈
  let count = 0;
  let str = '';
  
  for (let i = 0; i < s.length; i++) {
    let cur = s.charAt(i);
    if (cur === '[') {
      //当前的计数和字符串压入栈中
      countStack.push(count);
      strStack.push(str);
      //清空计数和字符串
      count = 0;
      str = '';
    } else if (cur === ']') {
      //累计结束，进行结算
      let num = countStack.pop();
      let temp = '';
      //让 [ 和 ] 之间的字符串重复num次
      for (let j = 0; j < num.length; j++) {
        temp += str;
      }
      //和前面已经求得的字符串进行拼接
      str = strStack.pop() + temp;
    } else if (cur >= '0' && cur <= '9') {
      count = count * 10 + (cur - '0');
    } else {
      str += cur;
    }
  }
  return str;
}