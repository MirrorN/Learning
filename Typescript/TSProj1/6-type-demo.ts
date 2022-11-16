import axios from 'axios'

// 泛型
function func1() {
  function id<Type>(value: Type): Type {
    return value
  }
  const num = id<number>(10)
  console.log(num)
  const str = id<string>('aaaa')
  console.log(str)

  const num2 = id(10)
}

// func1()

function func2() {
  function test<Type>(value: Type): Type {
    return value
  }

  console.log(test<string>('hello'))
  console.log(test<number>(123))
}

// func2()

// 泛型约束1 指定更具体的类型
function func3() {
  function getLength<Type>(value: Type[]): void {
    console.log(value.length)
  }

  getLength([1, 2, 3])
  getLength(['a', 'b'])
  // getLength('asssfd')
}

// func3()
// 泛型约束2 添加约束
function func4(): void {
  interface ILength {
    length: number
  }
  function getLength<Type extends ILength>(value: Type): void {
    console.log(value.length)
  }
  getLength('afdfd')
  getLength([1, 2, 3, 4])
  getLength({ length: 23 })
}
// func4()

// 多个泛型变量情况
function func5() {
  function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    console.log(obj[key])
  }

  let person = { name: 'zs', age: 12 }
  // 访问对象属性
  getProp(person, 'name')
  // 访问数组属性
  getProp([1, 2, 3], 'length')
  // 访问数组索引 - 数字索引也可以作为属性使用 (number)
  getProp([1, 2, 3], 1)
  // 访问字符串属性
  getProp('abc', 1)
  // 访问字符串属性方法
  getProp('abc', 'length')
  // 访问数字属性方法
  getProp(123, 'toFixed')
}
// func5()

// 泛型接口
function func6() {
  interface Test<Type> {
    getId: (value: Type) => Type
    ids: () => Type[]
  }

  let test: Test<number> = {
    getId(value) {
      return value
    },
    ids() {
      return [1, 2, 3]
    },
  }
}

// 泛型类
function func7() {
  class Generic<Type> {
    defaultValue: Type
    constructor(val: Type) {
      this.defaultValue = val
    }
  }

  const test = new Generic(10)
  console.log(test.defaultValue)
}

// func7()
// 泛型工具类型
function func8() {
  interface Props {
    id: string
    name: string
    children: number[]
  }
  type PartialProps = Partial<Props>
  type ReadonlyProps = Readonly<Props>
  type PickProps = Pick<Props, 'id' | 'name'>
  type RecordProps = Record<'a' | 'b' | 'c', string[]>
  let obj: RecordProps = {
    a: ['a'],
    b: ['b'],
    c: ['c'],
  }
}

// 索引签名
function func9() {
  interface AnyObject {
    [key: string]: number
  }

  let obj: AnyObject = {
    a: 12,
    b: 1,
  }

  interface MyArray<T> {
    [n: number]: T
  }

  let arr: MyArray<number> = [1, 3, 5]
  let arr1: MyArray<string> = ['a', 'b', 'c']
}

function func10() {
  type PropKeys = 'x' | 'y' | 'z'
  type Type1 = { x: number; y: number; z: number }

  type Type2 = { [Key in PropKeys]: number }

  // type Props = { a: number; b: number; c: string }
  // type Type3 = { [Key in keyof Props]: string }

  type Props = { a: number; b: string; c: boolean }
  type ta = Props['a']
  type tb = Props['b']

  let arr: number[] = [1, 2, 3]
  arr.forEach

  axios({
    url: '',
  })
}
