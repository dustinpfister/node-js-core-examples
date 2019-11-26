let fs = require('fs'),
path = require('path'),

path_file = path.join(process.cwd(), 'db.txt');

fs.open(path_file, 'w+', 0o666, (err, fd) => {

    if (err) {
        console.log(err);
        console.log(fd);
    } else {
        let buff = Buffer.from('Hello World', 'utf8'),
        buff_start = 0,
        buff_length = buff.length,
        file_pos = 0;
        fs.write(fd, buff, buff_start, buff_length, file_pos, (err) => {
            if (err) {
                console.log(err);
                fs.close(fd, () => {
                    console.log('file closed');
                });
            } else {
                console.log('write done');
                fs.close(fd, () => {
                    console.log('file closed');
                });
            }
        });
    }
});
