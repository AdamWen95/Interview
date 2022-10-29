function letterCombinations(str) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const res = [];
  if (str.length === 0) {
    return [];
  }
  for(let code of str) {
    let word = map[code];
     //不是第一个word
     if (res.length > 0) {
       let temp = [];
      for(let ch of word) {
        for(let item of res) {
          temp.push(item + ch);
        }
      }
      res = temp;
     } else {
       res.push(...word);
     }
  }

  return res;
}