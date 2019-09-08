let path = require('path');
let p = path.resolve(process.cwd(),'new_foo_project');

console.log(path.isAbsolute(p)); // true
console.log(p);
// (absolute path to ./new_foo_project)