let path = require('path');

let p1 = '/home/dustin/js/nodejs-path-parse/index.js',
p2 = './js/project1/main.js',
p3 = 'C:\\Windows\\system32\\notepad.exe';

console.log(path.parse(p1).root); // '/'
console.log(path.parse(p2).root); // ''
console.log(path.parse(p3).root); // 'C:\\'
