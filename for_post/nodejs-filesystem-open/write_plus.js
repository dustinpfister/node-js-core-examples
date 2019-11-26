let fs = require('fs'),
promisify = require('util').promisify,
path = require('path'),

open = promisify(fs.open),
close = promisify(fs.close),
write = promisify(fs.write),

path_file = path.join(process.cwd(), 'db.txt');

let fd;
open(path_file, 'w+', 0o666)

.then((nFd) => {

    fd = nFd;

    let buff = Buffer.from('adfthrj\n', 'utf8'),
    buff_start = 0,
    buff_length = buff.length,
    file_pos = 0;

    return write(fd, buff, buff_start, buff_length, 1*8);

})

.then(() => {
    console.log('write done');
    return close(fd);
})

.catch((e) => {

    console.log(e);

});
