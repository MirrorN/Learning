// 定义私有变量
let n1 = 10
let n2 = 20

// 定义模块私有方法
function show() {
  console.log('modularization')
}

// 指定向外共享的成员
export default {
  n1,
  show,
}

// 按需导出
export let s1 = 'a'
export let s2 = 12
export function print() {
  console.log('some texts')
}
