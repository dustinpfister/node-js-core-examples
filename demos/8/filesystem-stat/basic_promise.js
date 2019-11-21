// use fs.stat promise style with confidence
let fs = require('fs'),
path = require('path'),
cwd = process.cwd(),
promisify = require('util').promisify,
stat = promisify(fs.stat),
path_item = process.argv[2] || cwd;

stat(path_item)
.then((stats) => {
    console.log('**********');
    console.log('item at: ' + path_item);
    console.log('stats:');
    console.log(stats);
    console.log('**********');
})
.catch((e) => {
    console.log(e);
});
