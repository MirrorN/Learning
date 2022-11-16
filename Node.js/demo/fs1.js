console.log(__dirname);

path = require('path');


const tmp = path.join('a', '../b', 'c');
// b\c ../相当于回到上一级（抵消上一个目录）
console.log(tmp);

const tmpPath = './a/c/base.file';

console.log(path.basename(tmpPath));  // base.file
console.log(path.basename(tmpPath, '.file'));  //base

