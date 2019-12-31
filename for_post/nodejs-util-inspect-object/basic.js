let util = require('util');

let obj = {
    x: 42,
    y: 30
};
let str = util.inspect(obj);
console.log(typeof str); // string
console.log(str); // { x: 42, y: 30 }
