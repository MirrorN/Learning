/* async-await 执行顺序 */
import thenFs from 'then-fs'

console.log('a')
async function readFile() {
  console.log('b')
  const res1 = await thenFs.readFile('./files/file1.txt', 'utf8')
  console.log(res1)
  const res2 = await thenFs.readFile('./files/file2.txt', 'utf8')
  console.log(res2)
  const res3 = await thenFs.readFile('./files/file3.txt', 'utf8')
  console.log(res3)
  console.log('c')
}

readFile()
console.log('d')
