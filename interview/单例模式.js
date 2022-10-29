function Singleton (name) {
  this.name = name;
}
Singleton.prototype.getName = function () {
  alert(this.name);
}
Singleton.getInstance = (function (name) {
  var instance;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  }
})()

var a = Singleton.getInstance('ConardLi');
var b = Singleton.getInstance('ConardLi2');

console.log(a===b);   //true

//es6
class Single {
  static getInstance() {
    if (!Single.instance) {
      Single.instance = new Single();
      return Single.instance;
    }
    return Single.instance;
  }
  constructor(name) {
    this.name = name;
  }
}

var s1 = Single.getInstance();
