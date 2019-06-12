let fs = require('fs');

let writer = fs.createWriteStream('test_copy.txt', {
        flags: 'w'
    });

writer.on('pipe', function () {

    console.log('seomthing is being piped in.');

});

let reader = fs.createReadStream('test.txt')

    .pipe(writer);
