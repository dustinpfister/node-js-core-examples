let fs = require('fs');

let writer = fs.createWriteStream('test.txt')

.on('open', function (fd) {

    console.log('file is open!');
    console.log('fd: ' + fd);

});
