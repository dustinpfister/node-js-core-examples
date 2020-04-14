let path = require('path');

let cwd = process.cwd(),
thisMod = __dirname;

console.log(  path.resolve('.') );
console.log(  cwd );
console.log(  thisMod );