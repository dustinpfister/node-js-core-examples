let path = require('path');

console.log(path.resolve('.'));
console.log(process.cwd());
console.log(__filename);
console.log(__dirname);
console.log(path.dirname(__filename));
