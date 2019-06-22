let util = require('util'),
fs = require('fs'),
promisify = util.promisify,
writeFile = promisify(fs.writeFile);
// can now write files Promise style in
// node 8.x
writeFile('./test.txt', 'hello world')
.then(() => {
    console.log('test.txt written');
})
.catch ((e) => {
    console.log('error writing test.txt');
    console.log(e.message);
});
