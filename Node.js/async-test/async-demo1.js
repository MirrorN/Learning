// let a = 0
// function funcPrint(x){
//     console.log(x)
// }

// function timer(time, callback){
//     setTimeout(() => {
//         a = 6
//         callback(a)        
//     }, time)
// }

// console.log(a)
// timer(2000, funcPrint)


// const fs = require('fs')
// const path = require('path')
// console.log(__dirname)
// const data =  fs.readFileSync(path.join(__dirname, 'test.txt'), 'utf-8')

// console.log(data)
// console.log('program done.')

// 测试 sleep 和 setInterval
function func1() {
    setInterval(() => {
        console.log(+new Date());
    }, 2000);
}
// func1()


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

// func2()

/*
    async - await 测试
*/
async function test(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('test 3000 ms')
        }, 3000);
    })
}

function func(){
    console.log('fn')
}


async function print(){
    return 'ddddd'
}



async function async1(){
    console.log('async1 start')
    let tmp = async2()
    console.log(tmp)
    console.log('async1 end')
}

async function async2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('async2')
        }, 2000);
    })
}

// async1()


/*
    使用 async - await 取数据
*/
const mysql = require('mysql');

const db = mysql.createPool({
    host: '192.168.10.15',
    user: 'wuxing',
    password: 'Test123!',
    database: 'db_test',
});

async function getData(){
    const sqlStr = 'select * from grades'
    return new Promise((resolve, reject)=>{
        db.query(sqlStr, (err, results)=>{
            if(err){
                return reject(err)
            }
            else{
                resolve(results)
            }
        })
    })
}

async function printData(){
    const res = await getData()
    console.log(res)
}

async function asyncFn1 () {
    console.log('asyncFn1 start')
    await asyncFn2()
    console.log('async1 end')
}

async function asyncFn2 () {
    console.log('asyncFn2')
}

console.log('script start')

setTimeout(function () {
    console.log('setTimeout')
}, 0)

asyncFn1()

new Promise((resolve) => {
    console.log('Promise')
    resolve()
}).then(() => {
    console.log('Promise.then')
})
console.log('script end')
