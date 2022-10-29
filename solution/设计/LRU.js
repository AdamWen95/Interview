function LRUCache(cap) {
  this.cache = {};
  this.cap = cap;
  this.size = 0;
  this.queue = [];
}

LRUCache.prototype.get = function (key) {
  const temp = this.cache[key];
  if (temp !== undefined) {
    //把key提到队末
    this.queue = this.queue.filter(item => {
      return item !== key;
    })
    this.queue.push(key);
    return temp;
  }
  return -1;
}

LRUCache.prototype.put = function (key, value) {
  const temp = this.cache[key];
  this.cache[key] = value;

  if (!temp) {
    if (this.size === this.cap) {
      //删除队首的key并删除cache中的该key对应的值
      const _key = this.queue.shift();
      this.cache[_key] = undefined;
    } else {
      this.size++;
    }
    this.queue.push(key);
  } else {
    this.queue = this.queue.filter(item => {
      return item !== key;
    })
    this.queue.push(key);
  }
}