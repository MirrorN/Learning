var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({port: 80})


let clients = []
let i = 0


wss.on('connection', function(ws){
    ws.name = 'User' + ++i
    clients.push(ws)

    ws.on('message', function(message){
        broadcast(message, ws)
        // console.log(message)
        // console.log(message.toString())
    })
})

function broadcast(msg, ws){
    for(var key in clients){
        clients[key].send(ws.name + ': ' + msg)
    }
}