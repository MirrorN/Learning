// 函数兼容性
// 参数兼容
function func1() {
  let f1 = (a: number) => {}
  let f2 = (a: number, b: number) => {}
  f2 = f1
}

function func2() {
  interface Point2D {
    x: number
    y: number
  }
  interface Point3D {
    x: number
    y: number
    z: number
  }
  type F2 = (p: Point2D) => void
  type F3 = (p: Point3D) => void

  let f2: F2
  let f3: F3
  // 报错
  // f2 = f3
  // f3= f2
}

// 交叉类型
function func3() {
  interface Person {
    name: string
  }
  interface Contact {
    phone: string
  }

  type PersonDetail = Person & Contact
  let obj: PersonDetail = {
    name: 'zs',
    phone: '123',
  }
}

// 交叉接口和继承
function func4() {
  interface A {
    name: string
    fn(a: number): void
  }
  interface B extends A {
    // name:number;
    // fn(a:string):void;
  }
}

function func5() {
  interface A {
    name: string
    fn: (a: number) => string
  }
  interface B {
    name: number
    fn: (a: string) => void
  }

  type C = A & B
  /*   let tmp: C = {
    name: 'ss',
    fn:(a:number){}
  } */
}

/* function func6(){
  interface A{
    fn:(a:number)=>void
  }
  interface B{
    fn:(a:string)=>void
  }
  type C = A & B
  let c:C={
    fn(a:number){
      console.log(a)
    }
  }
  c.fn(12)
} */
