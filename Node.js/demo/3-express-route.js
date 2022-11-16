const express = require('express');
// 导入路由模块文件
const router = require('./3-express-router-module');
const app = express();

app.use(router);

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1');
})