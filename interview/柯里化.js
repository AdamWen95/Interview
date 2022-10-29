function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return function (...args2) {
      return currying(fn, ...args, ...args2);
    }
  }
}