const express = require('express')
const session = require('express-session');
const { read } = require('fs');

const app = express();

// 配置 session
app.use(ssession({
    // secret属性值可以是任意字符串
    secret: 'anything',
    // 两个属性为固定写法
    resave: false,
    saveUninitializaed: true
}));

app.post('/api/post', (req, res)=>{
    if(req.body.username !== 'admin' || req.body.password !== '0000'){
        return res.send({status:1, meg:'default'});
    }
});

// 将用户信息 存储到 session 中
req.session.user = req.body;
// 将用户的登陆状态 存储到session中
req.session.islogin = true;

res.send({status: 0, msg: 'success'});

app.get('/api/username', (req, res)=>{
    if(!req.session.islogin){
        res.send({status: 1, msg: 'fail'});
    }
    res.send({status: 0, msg: 'success', username: req.session.user.username});
});


// 退出登录的接口
app.post('/api/logout', (req, res)=>{
    // 清空当前客户端对应的 session 信息
    req.session.destroy();
    res.send({
        status: 0,
        msg: 'login out',
    });
});




