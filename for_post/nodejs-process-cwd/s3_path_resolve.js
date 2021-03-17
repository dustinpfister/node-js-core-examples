let path = require('path');
let fooMod = require(path.resolve(__dirname, 'lib/foo.js'));

console.log( process.cwd() );
console.log( __dirname );
let f = fooMod();
console.log( f.mess );
console.log( f.dirname );
