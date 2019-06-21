let fs = require('fs');
let open = (path_file, flags) => {
    flags = flags || 'r+';
    return new Promise((resolve, reject) => {
        fs.open(path_file, flags, (e, fd) => {
            if (e) {
                reject(e)
            } else {
                resolve(fd);
            }
        });
    })
};
let path_file = './test.txt';
open(path_file, 'w+')
.then((fd) => {
    console.log('the file exists the fd is : ' + fd);
    let str = 'hello world';
    let onClose = () => {
        console.log('file closed');
    }
    fs.write(fd, Buffer.from(str), 0, str.length, 0, (e, bw, buff) => {
        if (e) {
            console.log(e.message);
            fs.close(fd, onClose);
        } else {
            console.log('bytes written' + bw);
            fs.close(fd, onClose);
        }
    });
});
