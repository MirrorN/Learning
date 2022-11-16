const e = require('cors');
const mysql = require('mysql');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_dv_01',
});

function func1(){
    db.query('select 1', (err, results)=>{
        if(err){
            return console.log(err.message);
        }
        console.log(results);
    });
}

// func1();

function funcQuery(){
    const sqlStr = 'select * from users';
    db.query(sqlStr, (err, results)=>{
        if(err){
            return console.log(err.message);
        }
        console.log(results);
    })
}

// funcQuery();

function funcInsert(){
    const user = {username: 'zhangsannn', password: 'zssss', status: 0};
    const sqlStr = 'insert into users set ?';
    const sqlStr1 = 'insert into users (username, password, status) values ("zhangsans", "aaaa", 1)'; 
    const sqlStr2 = 'insert into users values ?'
    
    db.query(sqlStr2, user, (err, results)=>{
        if(err){
            return console.log(err.message);
        }
        console.log(results);
    })
}

funcInsert();