import fs from 'fs'

function getFile(fpath) {
  // Promise 接收两个参数 resolve 代表成功时的操作  reject 代表失败时的操作
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
      // 如果文件读取失败 将 err 传递给错误处理函数 并 return (结束执行)
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}

// 调用方法时候指定 resolve 和 reject 对应的处理函数
getFile('./files/file11.txt').then(
  (val) => {
    console.log(val)
  },
  (err) => {
    console.log(err.message)
  }
)
