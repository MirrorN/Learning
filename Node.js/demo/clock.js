const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) =>{
    const url = req.url;

    // 省略 clock 中间文件夹
    let fpath = '';
    if(url === '/'){
        fpath = path.join(__dirname, './clock/index.html');
    }else{
        fpath = path.join(__dirname, './clock', url);
    }

    // 获得对应文件内容 如果不存在 则返回 404 not found
    fs.readFile(fpath, 'utf-8', (err, datastr) =>{
        if(err){
            return res.end('<h1>404 Not Found</h1>');
        }else{
            res.end(datastr);
        }
    })
});

server.listen(80, () =>{
    console.log('Running http://127.0.0.1');
});