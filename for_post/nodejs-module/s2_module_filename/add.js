let api = (a, b) => {
    return a + b;
};
module.exports = api;

let path = require('path');
console.log( path.basename(module.filename)); // 'add.js'
