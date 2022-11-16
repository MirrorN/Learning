// 全局中间件 局部中间件

const { application } = require('express');
const express = require('express');

const app = express();

function mid1(req, res, next){
    console.log('midware 1');
    next();
}

function mid2(req, res, next){
    console.log('mideware 2');
    next();
}

// 全局注册中间件
// app.use(mid1);
// app.use(mid2);

// 如果使用全局中间件方式  get 和 post 路由都会触发
app.get('/getpage', (req, res)=>{
    console.log('get request.');
    res.send('get resquest');
});

app.post('/postpage', [mid1, mid2], (req, res)=>{
    console.log('post request.');
});

app.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})
 