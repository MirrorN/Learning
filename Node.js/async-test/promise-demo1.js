/*
    使用 Promise 对象进行异步操作
*/
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// 测试 promise 获取异步操作结果
function func2() {
    let a = 5
    let b = 10
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            b = 20
            resolve(b)
        }, 3000);
    })
    console.log(a + b)
    promise.then((value) => {
        console.log(a + b)
    }, (err) => {
        console.log(err.message)
    })
}

// 使用 promise 发起 xhr 请求
function getBooksInfo(url){
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.send()
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4 && xhr.status === 200){
                 return resolve(xhr.responseText)
            }else if(xhr.readyState === 4 && xhr.status !== 200){
                // 注意这里如果要对返回不成功做处理的话 必须保证 readyState 的状态为 4
                // 否则有可能在传输过程中（readystate=3）的时候就提前结束数据传输 直接返回错误
                return reject(new Error(xhr.statusText))
            }
        }
    })
    return promise
}

const url = 'http://www.liulongbin.top:3006/api/getbooks'
// getBooksInfo(url).then((value)=>{
//     console.log(value)
// }, (err)=>{
//     console.log(err)
// })

// 异步 ajax 请求测试
function getBooksAjax(url){
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        let ind = 1
        xhr.open('GET', url+'?id='+ind)
        xhr.send()
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState !== 4){
                return;
            }
            if(xhr.status === 200){
                // 推荐写成 return 的方式
                return resolve(xhr.responseText)
            }else{
                return reject(new Error(xhr.statusText))
            }
        }
    })
    return promise
}

// getBooksAjax(url).then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     // 推荐使用 catch 捕获rejected的返回结果
//     console.log(err)
// }).finally(()=>{
//     console.log('done.')
// })

// Promise.all() 方法
function getBooks2(url, index){
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url+'?id='+index)
        xhr.send()
        xhr.onreadystatechange = function(){
            if(this.readyState !== 4){
                return;
            }
            if(this.status === 200){
                return resolve(this.responseText)
            }else{
                return reject(this.statusText)
            }
        }
    })
    return promise
}

// const promises = [1, 2].map(function(id){
//     return getBooks2(url, id)
// })
// Promise.all(promises).then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('done')
// })


/*
    async await 测试
*/

function foo(){
    Promise.resolve().then(resolve => {
        console.log('1')
    })
    console.log('2')
}

// foo()

async function foo2(){
    await Promise.resolve().then(resolve =>{
        console.log('1')
    })
    console.log('2')
}

// foo2()


async function printBooks(){
    function getBooks(){
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url+'?id=1')
        xhr.send()
        xhr.onreadystatechange = function(){
            if(this.readyState !== 4){
                return;
            }
            if(this.status === 200){
                console.log(this.responseText)
            }else{
                console.log(this.statusText)
            }
        }
    }
    await getBooks()
    console.log('done')
}

printBooks()