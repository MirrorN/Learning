/* 使用回调函数读文件 */
import fs from 'fs'

fs.readFile('./files/file1.txt', 'utf8', (err, val) => {
  if (err) {
    return console.log(err.message)
  }
  console.log(val)
  fs.readFile('./files/file2.txt', 'utf8', (err, val) => {
    if (err) {
      return console.log(err.message)
    }
    console.log(val)
    fs.readFile('./files/file3.txt', 'utf-8', (err, val) => {
      if (err) {
        return console.log(err.message)
      }
      console.log(val)
    })
  })
})
