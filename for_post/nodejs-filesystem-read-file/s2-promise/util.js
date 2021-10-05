let fs = require('fs'),
promisify = require('util').promisify,
readFile = promisify(fs.readFile);

let fileName = process.argv[2] || 'util.js';

readFile(fileName, 'utf8')
.then((data) => {
    console.log(Buffer.isBuffer(data)); // true
    console.log(typeof data); // 'object'
    console.log(data.toString()); // [text of this code]
})
.catch((e) => {
    console.warn(e.message);
});
