/*
    Promise函数对象的all方法
    返回一个promise对象，只有当所有promise都成功时才成功
    */
   Promise.all = function(promises) {
    //用来保存所有成功value的数组（长度和promises一致）
    const values = new Array(promises.length)
    //用来保存成功promise的数量
    let resolvedCount = 0
    
    return new Promise((resolve, reject) => {
        //遍历promises获取每个promise的结果
        promises.forEach((p, index) => {
            //p成功，将成功的value保存到values
            //p可以是数值而不是promise对象，因此这里用Promsie.resolve()包装一下
            Promise.resolve(p).then(value => { 
                resolvedCount++
                values[index] = value
                
                //如果全部成功了，将返回的promise改为成功
                if (resolvedCount === promises.length) {
                    resolve(values)
                }
            }, reason => { //只要一个失败了，返回的promise就失败
                reject(reason)
            })
        })
    })
}

/*
Promise函数对象的race方法
返回一个promise对象，其结果由第一个完成的promise决定
*/
Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
        //遍历promises获取每个promise的结果
        promises.forEach((p, index) => {
            Promise.resolve(p).then(value => { //一旦成功了，将return的promise变为成功
                resolve(value)
            }, reason => { //一旦失败了，将return的promise变为失败
                reject(reason)
            })
        })
    })
}