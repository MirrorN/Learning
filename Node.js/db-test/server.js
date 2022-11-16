const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

// 建立数据库连接
function createCon() {
    const db = mysql.createPool({
        host: '192.168.10.15',
        user: 'wuxing',
        password: 'Test123!',
        database: 'db_test',
    })
    return db
}

// 测试取数据
function queryData(sql, db){
    return new Promise((resolve, reject)=>{
        db.query(sql, (err, results)=>{
            if(err){
                return reject(err)
            }
            let res = []
            for(let i=0; i<results.length; i++){
                res.push([results[i].month, results[i].grade])
            }
            return resolve(res)
        })
    })
}

app.use(cors())

app.get('/api/get', (req, res) => {
    const db = createCon()
    const sqlStr = "select * from grades"
    queryData(sqlStr, db).then((value)=>{
        console.log('get request')
        res.send(value)
    }).catch((err)=>{
        console.log(err)
    })
})

app.post('/api/post', (req, res) => {
    res.send('post')
})

app.listen(3000, () => {
    console.log('server running')
})