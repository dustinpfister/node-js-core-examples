let os = require('os');

console.log(Buffer.from(os.EOL).toString('hex'));
// '0d0a' if 'win32'
// '0a' if posix


console.log(Buffer.from('\r\n').toString('hex'));
// '0d0a'
console.log(Buffer.from('\n').toString('hex'));
// '0a'
