let fs = require('fs');

// a writer in 'wx+' mode that will fail if the file
// all ready exists
let writer = fs.createWriteStream('test.txt')

.on('open', function (fd) {

    console.log('file is open!');
    console.log('fd: ' + fd);

});
