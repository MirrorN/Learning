// type
function func1(): void {
  let num: number = 10
  let a: undefined = undefined

  let arr: number[] = [1, 2, 3, 4]
}

// 对象类型 - 数组
function func2(): void {
  let arr: Number[] = [1, 2, 3]
  let arr1: number[] = [1, 2, 3]
  console.log(arr)
  console.log(arr1)
}

// func2()

// 数组类型 - 多类型定义
function func3(): void {
  let arr: (number | string)[] = [1, 2, 'abs']
  console.log(arr)
}

// func3()

function func4() {
  type NumorString = number | string
  let arr: NumorString[] = [1, 2, 'ab']
  console.log(arr)
}

// func4()
// 函数类型
function add(num1: number, num2: number): number {
  return num1 + num2
}

const add2 = (num1: number, num2: number): number => {
  return num1 + num2
}

// console.log(add2(1, 2))
// 可选参数
const add3 = (n1: number, n2: number, n3?: number) => {
  return n1 + n2 + (n3 === undefined ? 0 : n3)
}
// console.log(add3(1, 2))
// console.log(add3(1, 2, 3))

// 对象类型
let person: {
  name: string
  age: number
  print(last: string): string
} = {
  name: 'zhangsan',
  age: 12,
  print(last) {
    return this.name + ' ' + this.age + last
  },
}

// console.log(person.print('last'))

let person2: { name: string; age?: number; print(last: string): void } = {
  name: 'lisi',
  age: 15,
  print(last) {
    console.log(this.name, this.age, last)
  },
}

// interface 类型 - 对象复用
interface IPerson {
  name: string
  age: number
  print(last: string): void
}

let person3: IPerson = {
  name: 'wangwu',
  age: 12,
  print(last) {
    console.log(this.name, this.age, last)
  },
}

// console.log(person3)
