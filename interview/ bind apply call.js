Function.prototype.mybind = function () {
  let args = arguments;
  args = Array.prototype.slice.call(args);
  let _this = this;
  let target = args.shift();
  let fn = function () {
    //判读返回的函数是不是被当成构造函数使用
    let context = this instanceof fn ? this : target;
    _this.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  }
  //返回的函数需要有原函数的prototype的值
  fn.prototype = Object.create(this.prototype);
  return fn;
}

Function.prototype.mycall = function (obj) {
  obj =  obj || window;
  let args = [...arguments].slice(1);
  obj.fn = this;
  let result  = obj.fn(...args);
  delete obj.fn;
  return result;
}

Function.prototype.myapply = function (obj, args) {
  obj = obj || window;
  obj.fn = this;
  let result;
  if (!args) {
    result = obj.fn();
  } else {
    result = obj.fn(...args);
  }
  delete obj.fn;
  return result;
}