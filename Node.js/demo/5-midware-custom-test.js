const express = require('express');
const parser = require('./5-midware-custom');

const app = express();
app.use(parser);

app.get('/getpage', (req, res)=>{
    console.log(req.body);
    res.send(req.body);
})


app.listen(80, ()=>{
    console.log('server running at http:127.0.0.1');
})