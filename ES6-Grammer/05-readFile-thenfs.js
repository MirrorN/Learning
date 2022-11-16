/* 使用 then-fs 基于 Promise 读取文件 */
import thenFs from 'then-fs'

thenFs.readFile('./files/file1.txt', 'utf8').then(
  (val) => {
    console.log(val)
  },
  (err) => {
    console.log(err.message)
  }
)
thenFs.readFile('./files/file2.txt', 'utf8').then(
  (val) => {
    console.log(val)
  },
  (err) => {
    console.log(err.message)
  }
)
thenFs.readFile('./files/file3.txt', 'utf8').then(
  (val) => {
    console.log(val)
  },
  (err) => {
    console.log(err.message)
  }
)
