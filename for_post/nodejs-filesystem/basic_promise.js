let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,
cwd = process.cwd();

let readFile = promisify(fs.readFile);

// read a file Promise style
readFile(path.join(cwd, 'README.md'), 'utf8')

.then(function (md) {
    console.log(md);
})

.catch (function (e) {
    console.log(e);
});
