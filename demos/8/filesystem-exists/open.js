
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
open(path_file)

.then((fd) => {

    console.log('the file exists the fd is : ' + fd);

})

.catch ((e) => {

    console.log('Error opening ' + path_file);
    console.log(e.code);

})
