var p = {
    x: 1,
    y: 2,
    z: 3
};
// console.log(p)
// 元组类型
var position = [12, 32];
// 类型推论
function func1() {
    function func2() {
        var a = 1;
        var b = 2;
        return a + b;
    }
}
/* function func2() {
  const link = document.getElementById('link') as HTMLAnchorElement
  link.href
} */
// 字面量类型
function func3() {
    var str1 = 'Hello TS';
    var str2 = 'Hello TS';
    var str3 = 'hello';
    var num1 = 3;
    function changeDirection(direction) {
        console.log(direction);
    }
    changeDirection('up');
}
// 枚举类型
function func4() {
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    function changeDirection(direction) {
        console.log(direction);
    }
    changeDirection(Direction.Up);
    changeDirection(Direction.Right);
    var User;
    (function (User) {
        User[User["zs"] = 0] = "zs";
        User[User["ls"] = 1] = "ls";
        User[User["ww"] = 2] = "ww";
    })(User || (User = {}));
}
// func4()
// 枚举的值
function func5() {
    var Direction;
    (function (Direction) {
        Direction["Up"] = "UP";
        Direction["Down"] = "down";
        Direction["Left"] = "LEFT";
        Direction["Right"] = "right";
    })(Direction || (Direction = {}));
    console.log(Direction.Up);
    console.log(Direction.Left);
}
// func5()
var Test;
(function (Test) {
    Test["Ta"] = "TA";
    Test["Tb"] = "TB";
})(Test || (Test = {}));
console.log(Test.Tb);
