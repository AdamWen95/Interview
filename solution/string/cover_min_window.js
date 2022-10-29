var minWindow = function(s, t) {
  let start;
  let minLen = Number.MAX_SAFE_INTEGER;
  const map = {}; //储存t中的目标字母和对应的缺失个数
  let missingType = 0; //当前缺失的种类数

  //初始化map
  for(let ch of t) {
    if (!map[ch]) { //如果没有
      missingType++; //种类+1
      map[ch] = 1;
    } else {
      map[ch]++; //个数+1
    }
  }

  //双指针
  let left = 0;
  let right;
  for(right = 0; right < s.length; right++) {
    const r = s[right];
    if (map[r] !== undefined) { //r是目标字母，缺失个数-1
      map[r]--;
    }
    if (map[r] === 0) { //r缺失个数归零，缺失种类-1
      missingType--;
    }

    while(missingType === 0) { //不缺失字母（全覆盖）的情况下
      if (right - left + 1 < minLen) {
        minLen = right - left + 1; //更新最小长度
        start = left; //更新最小窗口的起点
      }
      const l = s[left];
      if (map[l] !== undefined) { //将要舍弃的l是目标字母，缺失个数+1
        map[l]++;
      }
      if (map[l] > 0) { //l缺失个数不为0，缺失种类+1
        missingType++;
      }
      left++; //右移左指针
    }
  }

  return s.substring(start, start + minLen);
};