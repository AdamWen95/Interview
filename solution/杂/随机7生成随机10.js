function random10() {
  let res = rand7();
  //等概率1-5
  while(res > 5) {
    res = rand7();
  }
  //等概率1-6；50%概率1 2 3；50%概率4 5 6
  let temp = rand7();
  while(temp > 6) {
    temp = rand7();
  }
  
  return temp > 3 ? res : res + 5;
}