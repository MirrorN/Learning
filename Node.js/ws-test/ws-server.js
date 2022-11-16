// websocket - server
const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);
let clients = [];
let i = 0;

app.ws('/echo', (ws, req) => {
    console.log("connection: " + i++);
    clients.push(ws);
    ws.on('connection', function(connection){
        console.log('connection');
    });
    ws.on('message', function (msg) {
        console.log(msg);
        for(let key in clients){
            let str = 'client ' + key + msg;
            clients[key].send(str);
        }
    })
});

app.use('/ws-test', express.static('./ws-test'));
app.listen(80, function () {
    console.log('server running.');
});