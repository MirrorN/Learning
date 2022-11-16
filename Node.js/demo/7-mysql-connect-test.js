// 测试 MySql 的连接
const e = require('cors');
const mysql = require('mysql');

// 建立 MySql 数据库连接并配置
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_dv_01',
});

// 检测数据库是否正常工作
function func1() {
    db.query('SELECT 1', (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(results);
    });
}

// func1()

// 查询测试
function func2() {
    const sqlStr = 'select * from users';
    db.query(sqlStr, (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(results);
    });
}

// func2();

// 插入数据测试
function func3() {
    const user = { username: 'Qian', password: 'qian', status: 0 };
    // 通过占位符方式将实际数据传入
    const sqlStr = 'insert into users (username, password, status) values (?, ?, ?)';

    db.query(sqlStr, [user.username, user.password, user.status], (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        // 判断语句执行结果是否正确 如果实际影响到的行数为1则执行成功
        if (results.affectedRows === 1) {
            console.log('Insert Done.');
        }
    });
}

// func3();

// 插入语句的简化写法
function func4() {
    const user = { username: 'Sun', password: 'sun', status: 0 };
    // ? 表示占位符
    const sqlStr = 'insert into users set ?';

    // 直接将数据对象当作占位符的值
    db.query(sqlStr, user, (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        if (results.affectedRows === 1) {
            console.log('Insert Done.');
        }
    });
}

// func4();

// 更新语句测试
function func5() {
    const user = { username: 'Qi', password: 'iiii', id: 14 };
    // 使用占位符代替数据
    const sqlStr = 'update users set password=?, username=? where id=?';

    db.query(sqlStr, [user.password, user.username, user.id], (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        if (results.affectedRows === 1) {
            console.log('Update Done.');
        }
    });
}

func5();

// 更新语句简化
function func6() {
    const user = { id: 14, username: 'QIAN', password: 'qqqq' };

    const sqlStr = 'update users set ? where id=?';

    db.query(sqlStr, [user, user.id], (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        if (results.affectedRows === 1) {
            console.log('update done.');
        }
    });
}
// func6();

function func7() {
    const sqlStr = 'delete from users where id=?';

    db.query(sqlStr, 15, (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        if (results.affectedRows === 1) {
            console.log('Delete done');
        }
    });
}

// func7();

// 标记删除
function func8() {
    const sqlStr = 'update users set status=1 where id=?';

    db.query(sqlStr, 12, (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        if (results.affectedRows === 1) {
            console.log('Delete done.');
        }
    });
}

func8();