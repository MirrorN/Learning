//new WebSocket()，就触发了服务器端的connection事件
var ws = new WebSocket('ws://127.0.0.1:80/')

//当连接上服务器端，即打开连接后，触发
ws.onopen = function () {
  ws.send('大家好')
}

//当接收到（服务器端的）信息后，触发
ws.onmessage = function (event) {
  var chatroom = document.querySelector('.chatroom');
  chatroom.innerHTML += '<br/>' + event.data
}
//当服务器端关闭时，触发
ws.onclose = function () {
  console.log('Closed')
}
//当出错时，触发
ws.onerror = function (err) {
  alert('Error:' + err)
}