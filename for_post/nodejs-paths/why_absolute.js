let path = require('path');

let r = path.resolve('./foo.js'),
a = path.resolve(__dirname, './foo.js');

console.log(r);
console.log(a);