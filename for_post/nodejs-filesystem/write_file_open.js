let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,
cwd = process.cwd(),
open = promisify(fs.open),
stat = promisify(fs.stat),
close = promisify(fs.close),
write = promisify(fs.write),

path_file = path.join(cwd, 'db.txt');

let fd = null,
fileByteLength = 0;

// get stats
stat(path_file)
.then((stat) => {
    fileByteLength = stat.size;
})
.catch((e) => {
    if (e.code === "ENOENT") {
        fileByteLength = 0;
        return Promise.resolve();
    }
    return Promise.reject(e);

})
// open
open(path_file, 'a', 0o666)
.then((nFd) => {
    fd = nFd;
    console.log('writing to file of size: ' + fileByteLength);

    // buffer
    let buff = Buffer.from('foo', 'utf8'),
    buff_start = 0,
    buff_end = buff.length,
    // byte start position
    startPosition = fileByteLength;
    // using fs.write
    return write(fd, buff, buff_start, buff_end, startPosition);
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
