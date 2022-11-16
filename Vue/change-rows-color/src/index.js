// ES6 导入语法
import $ from 'jquery'
// 导入样式 在webpack中，一切皆模块，都可以使用ES6语法导入
import './css/index.css'

/* 
也可以使用变量a接收 只是如果 from 的结果为 undefined，那么没有必要进行接收
import a from './css/index.css' 
*/
import './css/index.less'

// 导入图片资源
import logo from './images/logo.png'

$(function () {
    $('li:odd').css('background-color', '#758d71')
    $('li:even').css('background-color', '#ccc')

    // 为img标签的src属性动态赋值
    $('#box').attr('src', logo)

    // 装饰器函数
    function info(target) {
        target.info = 'person info'
    }
    

    @info
    class Person { }

    console.log(Person.info)
})