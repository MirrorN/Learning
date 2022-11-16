// 通过类型别名定义对象类型
type IPerson = {
  name: string
  age: number
  print(): void
}

// Interface方式定义对象类型
interface IPerson2 {
  name: string
  age: number
  print(): void
}

// 接口的继承
interface Point2D {
  x: number
  y: number
}
interface Point3D extends Point2D {
  z: number
}

let p: Point3D = {
  x: 1,
  y: 2,
  z: 3,
}

// console.log(p)

// 元组类型
let position: [number, number] = [12, 32]

// 类型推论
function func1(): void {
  function func2() {
    let a = 1
    let b = 2
    return a + b
  }
}

/* function func2() {
  const link = document.getElementById('link') as HTMLAnchorElement
  link.href
} */

// 字面量类型
function func3() {
  let str1 = 'Hello TS'
  const str2 = 'Hello TS'

  let str3: 'hello' = 'hello'

  let num1: 3 = 3

  function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
    console.log(direction)
  }

  changeDirection('up')
}

// 枚举类型
function func4() {
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  function changeDirection(direction: Direction) {
    console.log(direction)
  }

  changeDirection(Direction.Up)
  changeDirection(Direction.Right)

  enum User {
    zs,
    ls,
    ww,
  }
}
// func4()

// 枚举的值
function func5() {
  enum Direction {
    Up = 'UP',
    Down = 'down',
    Left = 'LEFT',
    Right = 'right',
  }

  console.log(Direction.Up)
  console.log(Direction.Left)
}

// func5()

enum Test {
  Ta = 'TA',
  Tb = 'TB',
}

function fun6() {
  let obj: any = { x: 0 }
  let a
}

function func7() {
  let arr: number[] = [1, 2, 3]
  let obj: {
    name: string
    age: number
  } = {
    name: 'testName',
    age: 12,
  }
  let obj1: typeof obj = { name: 'vepor', age: 13 }
  console.log(typeof arr)
  console.log(typeof obj)
  let a: number = 10
  let b: Number = 12

  console.log(typeof a)
  console.log(typeof b)
}

func7()
