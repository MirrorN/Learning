// 创建模块化路由文件
const express = require('express');

const router = express.Router();

router.get('/getpage', (req, res)=>{
    console.log('get page');
    res.send(req.query);
});

router.post('/postpage', (req, res)=>{
    console.log('post page');
    res.send(req.query);
});

// 向外暴露
 module.exports = router;