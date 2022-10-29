//node
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let arr = inArr[0].split(' ').map(e=>+e)
        arr.pop()
        let k = +inArr[1]
        let res= reverseKGroup(arr, k).join('->')
        console.log(res)
    }
})
var reverseKGroup = function(arr, k) {
    let len = arr.length
    let cnt = Math.floor(len/k)
    let curArr  = [...arr]
    for (let i = 0; i < cnt; i++) {
        let lastArr = curArr.slice(k*(i+1))
        curArr = curArr.slice(0,i*k).concat(curArr.slice(i*k,k*(i+1)).reverse(),lastArr)
    }
    return curArr
};

//v8
let nums = readline().split(' ').slice(0,-1)
let k = readline()
let res = []
let result = ''
if(k<=1){
    result = nums.join('->')
}else{
    while(nums.length>=k){
    let arr = nums.splice(0,k)
    let ar=[]
    for(let i=0;i<k;i++){
        let result = arr.shift()
        ar.unshift(result)
    }
    res.push(ar)
}
 
for(let i=0;i<res.length;i++){
    if(i==res.length-1&&nums.length==0){
            result+=res[i].join('-\>')
    }else{
            result+=res[i].join('-\>')+'->'
    }
 
}
let back = nums.join('->')
result = result+back
}
 
console.log(result)