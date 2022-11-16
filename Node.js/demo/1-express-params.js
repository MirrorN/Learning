const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
// 测试 get 和 post 请求
app.get('/get', (req, res) => {
  console.log('get request.')
  res.send({ name: 'zs', age: 18, gender: 'man' })
})

// app.post('/post', (req, res)=>{
//     console.log('post request.');
//     res.send('post response.');
// })
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 使用 req 获取请求的参数
app.post('/paras', (req, res) => {
  console.log('params request.')
  console.log(req.body['eles'])
  console.log(JSON.stringify(req.body))
  res.send(JSON.stringify(req.body))
})

// 动态参数获取
app.post('/params2:name', (req, res) => {
  // res.send(req.params[name]);
  console.log(req.params)
  res.send(req.params)
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
