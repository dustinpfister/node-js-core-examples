let fs = require('fs');

let reader = fs.createReadStream('header.txt', {
        flags: 'a+',
        start: 10,
        end: 19
    });

reader.on('data', function (chunk) {

    console.log(chunk.toString()); // 'feild_info'

});
