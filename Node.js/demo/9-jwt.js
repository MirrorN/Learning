const jsonwebtoken = require('jsonwebtoken');
const jwt = require('express-jwt');
const express = require('express');


const app = express();
const secretKey = 'ssssssss';
// login interface
app.post('/api/login', (req, res)=>{
    res.send({
        status: 200,
        message: 'login success',
        // 调用 sign() 方法生成 JWT 字符串 参数分别为： 用户信息、加密密钥、配置对象有效期
        token: jwt.sign({username: userInfo.username}, secretKey, {expiresIn: '30s'});
    });
});


app.use(jwt({secret: secretKey})).unless({path: [/^\/api\\/]})