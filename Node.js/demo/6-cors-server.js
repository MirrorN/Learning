// cors中间件解决跨域问题
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/get', (req, res)=>{
    res.send('get request.');
});

app.post('/api/post', (req, res)=>{
    res.send('post request.');
});

app.delete('/api/delete', (req, res)=>{
    res.send('delete request.');
})

app.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})