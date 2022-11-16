const express = require('express');

const app = express();

// 注意第一个参数不要加 '.'
app.use('/demo/clock', express.static('./demo/clock'));
app.use('/demo/colors', express.static('./demo/colors'));

app.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})