// 引入 http 模块
const http = require('http');

// 创建 web 服务器实例
const server = http.createServer();

// 使用实例的 .on() 方法 为服务器绑定一个 request 事件
server.on('request', (req, res) =>{
    // 如果有来自客户端的请求 就会触发 request 事件
    console.log('Someone visit our web server.');
});

// 调用 listen 方法 启动 web服务器
server.listen(80, () =>{
    console.log('http server running at http://127.0.0.1:80');
});