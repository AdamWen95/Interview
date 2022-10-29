/*打印红绿灯: 打印red，停10s，打印yellow，停2s，打印 green 停 5s。 
继续打印red，停10s...，以此类推循环5次。
*/
const red = function() {
  return new Promise((resolve, reject) => {
    console.log('red');
    setTimeout(() => {
      resolve();
    }, 10000)
  })
}

const yellow = function() {
  return new Promise((resolve, reject) => {
    console.log('yellow');
    setTimeout(() => {
      resolve();
    }, 2000)
  })
}

const green = function() {
  return new Promise((resolve, reject) => {
    console.log('green');
    setTimeout(() => {
      resolve();
    }, 50000)
  })
}

function main(count, cur) {
  red().then(() => {
    return yellow();
  }).then(() => {
    return green();
  }).then(() => {
    cur++;
    if (cur < count) {
      main(count, cur);
    }
  })
}

main(0, 5);

//////
var sleep = function (time, i) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(i);
    }, time);
  })
};


var start = async function () {
  for (let i = 0; i < 6; i++) {
    let result = await sleep(1000, i);
    console.log(result);
  }
};

start();