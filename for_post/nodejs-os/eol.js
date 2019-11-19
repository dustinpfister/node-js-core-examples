let os = require('os');

console.log(Buffer.from(os.EOL).toString('hex'));
// '0d0a' if 'win32'
// '0a' if posix