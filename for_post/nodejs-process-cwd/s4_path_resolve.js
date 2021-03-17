let path = require('path');
let fooMod = require(path.resolve(__dirname, 'lib/foo.js'));
let os = require('os');
let f = fooMod();

console.log( process.cwd() );
console.log( __dirname );
console.log( os.homedir() );
console.log( f.dirname );
console.log( f.mess );
