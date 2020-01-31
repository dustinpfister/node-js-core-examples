let path = require('path');

let p = '/home/dustin/js/nodejs-path-parse/index.js';

let obj = path.parse(p);

console.log(obj.root); // '/'
console.log(obj.dir);  // '/home/dustin/js/nodejs-path-parse'
console.log(obj.base); // 'index.js'
console.log(obj.name); // 'index'
console.log(obj.ext);  // '.js'
