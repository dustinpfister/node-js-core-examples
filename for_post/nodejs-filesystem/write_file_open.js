let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,
cwd = process.cwd(),
open = promisify(fs.open),
close = promisify(fs.close),
read = promisify(fs.read),
write = promisify(fs.write),

path_file = path.join(cwd, 'db.txt');

let fd = null;
open(path_file, 'w+', 0o666)

.then((nFd) => {
    fd = nFd;
    return write(fd, Buffer.from('foo'), 0, Buffer.length, 0);
})

.then(() => {
    return close(fd);
})

.catch((e) => {

    console.log('\n', 'Error: ');
    console.log('code:' + e.code);
    console.log('mess: ' + e.message);
    console.log('');

});
