let age: number = 19
let myName: string = 'ssss'
let isLoading: boolean = true

let a: null = null
let b: undefined = undefined
let s: symbol = Symbol()

// 数组类型
let numbers: number[] = [1, 2, 3, 4]
let strings: Array<string> = ['a', 'b']

// 联合类型
let arr: (number | string | boolean)[] = [1, 'a', true]
console.log(arr)

//类型别名
type CustomArray = (number | string)[]
let arr1: CustomArray = [1, 2, 'a']
console.log(typeof arr1)

// 函数类型
function add(number1: number, number2: number): number {
  return number1 + number2
}
console.log(add(1, 2))

const add1 = (number1: number, number2: number): number => {
  return number1 + number2
}
console.log(add1(1, 2))

// 函数类型 - 2
const add2: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}
console.log(add2(1, 2))

function greet(name: string): void {
  console.log('hello ' + name)
}

// 可选参数
function testChoose(start?: number, end?: number): void {
  console.log('param1: ', start, 'param2: ', end)
}
testChoose(1, 2)
testChoose(1)
testChoose()

// 对象类型
let person: { name: string; age: number; sayHi(name: string): void } = {
  name: 'zhangsan',
  age: 12,
  sayHi() {
    console.log('hi')
  },
}

console.log(person)

let person2: {
  name: string
  age: number
  // sayHi:()=>void
} = {
  name: 'lisi',
  age: 12,
}

console.log(person2)

let person3: { testfunc: (name: string) => void }
let person4: { testfunc(name: string): void }

function myAxios(config: { url: string; methods?: string }) {
  console.log(config)
}

myAxios({ url: 'xxxxx', methods: 'sssss' })
myAxios({ url: 'xxxx' })

interface IPerson {
  name: string
  age: number
  sayHi(): void
}

let person5: IPerson = {
  name: 'zhangsan',
  age: 12,
  sayHi() {},
}

let person6: IPerson = {
  name: 'lisi',
  age: 12,
  sayHi() {},
}
