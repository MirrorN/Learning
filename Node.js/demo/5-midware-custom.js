// 自定义中间件
const qs = require('querystring');

const bodyParser = function(req, res, next){
    let str = '';
    req.on('data', (chunk)=>{
        str += chunk;
    });
    
    req.on('end', ()=>{
        const body = qs.parse(str);
        req.body = body;
        console.log(req.body);
        next();
    });
}

module.exports = bodyParser;