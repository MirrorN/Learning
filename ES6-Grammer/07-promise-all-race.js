/* 使用 Promise all 方法 */
import thenFs from 'then-fs'

// 定义异步操作数组
const promiseArr = [
  thenFs.readFile('./files/file1.txt', 'utf8'),
  thenFs.readFile('./files/file2.txt', 'utf8'),
  thenFs.readFile('./files/file3.txt', 'utf8'),
]

// 将数组中所有的异步操作全部执行完才会进行下一步
Promise.all(promiseArr)
  .then((val) => {
    console.log(val)
  })
  .catch((err) => {
    console.log(err.message)
  })

// 也可以使用数组的方式进行接收
Promise.all(promiseArr)
  .then(([val1, val2, val3]) => {
    console.log(val1)
    console.log(val2)
    console.log(val3)
  })
  .catch((err) => {
    console.log(err.message)
  })

Promise.race(promiseArr)
  // promiseArr 数组中任何一个异步操作完成就会立即执行 then 方法
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err.message)
  })
