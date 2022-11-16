/* 使用 thenfs 顺序读取文件 */
import thenFs from 'then-fs'

thenFs
  .readFile('./files/file11.txt', 'utf8')
  .catch((err) => {
    console.log(err.message)
  })
  .then((val) => {
    console.log(val)
    // 返回一个 Promise 实例 在后面的 then 方法中调用
    return thenFs.readFile('./files/file2.txt', 'utf8')
  })
  .then((val) => {
    console.log(val)
    return thenFs.readFile('./files/file3.txt', 'utf8')
  })
  .then((val) => {
    console.log(val)
  })
