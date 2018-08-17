let fs = require('fs');

let writer = fs.createWriteStream('test_copy.txt', {
        flags: 'w'
    });

let reader = fs.createReadStream('test.txt')

    .pipe(writer);
