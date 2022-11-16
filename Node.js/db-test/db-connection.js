// 数据库操作
const mysql = require('mysql');

const db = mysql.createPool({
    host: '192.168.10.15',
    user: 'wuxing',
    password: 'Test123!',
    database: 'db_test',
});

function sqlConnection(){
    db.query('select 1', (err, results) =>{
        if(err){
            return console.log(err.message);
        }
        // console.log(results);
    });
}

// 连接测试
sqlConnection();

function querySQL(){
    const sqlStr = 'select * from grades';
    let res = [];
    return new Promise((resolve, reject) =>{
        db.query(sqlStr, (err, results) => {
            if(err){
                return console.log(err.message);
            }
            // let tmpRes = JSON.parse(JSON.stringify(results));
            for(let i=0; i<results.length; i++){
                // 本身数据的结构为 results = {RowDataPacket{month: grade}}
                // 但是在实际使用的时候 可以直接忽略中间的 RowDataPacket
                let obj = {};
                obj[results[i].month] = results[i].grade;
                res.push(obj);
            }
            resolve(res);
        });
    });
}

const sqlStr = 'select * from grades'
const promise = new Promise((resolve, reject)=>{
    db.query(sqlStr, (err, results) =>{
        if(err){
            return reject(err)
        }
        resolve(results)
    })
})

