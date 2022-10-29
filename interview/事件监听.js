function bindEvent(elem, type, fn, selector) {
  elem.addEventListener(type, (e) => {
    const target = e.target
    if (selector) { //代理绑定
      if (target.maches(selector)) {
        fn.call(target, e)
      }
    } else { //普通绑定
      fn.call(target, e)
    }
  })
}