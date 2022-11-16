// import m1 from './01-default-export.js'

// console.log(m1)

// m1.show()

// 按需导入
import m1, { s1, s2 as ss2, print } from './01-default-export.js'

console.log(s1)
console.log(ss2)
print()

console.log(m1)
