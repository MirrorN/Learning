/* 使用 async/await */
import thenFs from 'then-fs'

function getFile(fpath) {
  thenFs
    .readFile(fpath, 'utf8')
    .then((val) => {
      console.log(val)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

async function getFile2(fpath) {
  const res1 = await thenFs.readFile('./files/file1.txt', 'utf8')
  console.log(res1)
  const res2 = await thenFs.readFile('./files/file2.txt', 'utf-8')
  console.log(res2)
  const res3 = await thenFs.readFile('./files/file3.txt', 'utf-8')
  console.log(res3)
}

// getFile('./files/file1.txt')
getFile2('./files/file2.txt')
