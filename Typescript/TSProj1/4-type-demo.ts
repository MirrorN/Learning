// 高级类型
function func1() {
  class Person {
    age: number
    gender: string
    constructor(age: number, gender: string) {
      this.age = age
      this.gender = gender
    }
    scale(n: number): void {
      this.age *= n
    }
  }
  const p = new Person(12, 'zs')
  console.log(p.age)
  console.log(p.gender)
}

// 继承方式实现类复用
function func2() {
  class Animal {
    move() {
      console.log('run')
    }
  }

  class Dog extends Animal {
    bark() {
      console.log('wawa')
    }
  }
}

// 实现接口
function func3() {
  interface Singale {
    name: string
    sing(): void
  }

  class Person implements Singale {
    name: string
    sing() {
      console.log('sing')
    }
  }
}

// 类可见修饰符
function func4() {
  class Animal {
    public run() {
      console.log('run')
    }
    protected move() {
      console.log('move')
    }
  }

  class Dog extends Animal {
    bark() {
      console.log('dog')
      this.move()
    }
  }

  const animal = new Animal()
  animal.run()
  const dog = new Dog()
  dog.bark()
}
// 私有修饰符
function func5() {
  class Animal {
    private __run__() {
      console.log('run')
    }
    move() {
      this.__run__()
      console.log('move')
    }
  }

  class Dog extends Animal {}

  const dog = new Dog()
  dog.move()
}

// 只读修饰符
function func6() {
  class Person {
    readonly age: number = 18
    constructor(age: number) {
      this.age = age
    }
    // 改变 readonly 属性，报错
    /* changeAge(){
      this.age = 19
    } */
  }

  interface Test {
    readonly testP: number
    testP2: string
  }
  let t1: Test = {
    testP: 12,
    testP2: 'str',
  }
  // t1.testP = 15
  t1.testP2 = 'str1'

  let obj: { readonly name: string; age: number } = {
    name: 'str',
    age: 13,
  }
  // readonly 属性不可修改
  // obj.name = 'str2'
}

// 类兼容
function func7() {
  class Point {
    x: number
  }
  class Point2D {
    x: number
    y: number
  }
  class Point3D {
    x: number
    y: number
    z: number
  }
  let a = new Point()
  let b: Point = new Point3D()
  let c: Point2D = new Point3D()
  // 出错
  // let d: Point2D = new Point()
}

function func75() {
  class Point {
    x: number
    y: number
  }
  class Point2D {
    x: number
    y: number
  }
  let p: Point = new Point2D()
}

// 接口兼容性
function func8() {
  interface Point {
    x: number
  }
  interface PointT {
    x: number
  }
  interface Point2D {
    x: number
    y: number
  }
  interface Point3D {
    x: number
    y: number
    z: number
  }

  let a: Point = { x: 1 }
  let b: PointT = a
  let c: Point3D = { x: 1, y: 1, z: 1 }
  let d: Point = c
}

// 类和接口之间的兼容
function func9() {
  interface Point {
    x: number
    y: number
  }

  class Point2D {
    x: number
    y: number
  }

  let p: Point = new Point2D()
}
