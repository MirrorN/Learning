// 文件处理
const fs = require('fs')
const moment = require('moment')

const filename = './files/test.txt'
function writeFile(filename, data){
    fs.writeFile(filename, data, 'utf-8', (err, datastr)=>{
        if(err){
            console.log(err.message)
        }else{
            console.log('Write done.')
        }
    })
}

// writeFile(filename, 'aa  bb\ncc  dd\nee ff')
console.log(moment())
console.log(moment().format('YYYY-MM-DD HH:mm:ss'))