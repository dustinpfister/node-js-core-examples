let fs = require('fs');

let writer = fs.createWriteStream('test.txt',{flags:'wx+'})

    .on('error', function (err) {

        console.log(err);

    });

writer.write('this will fail if the file is there before hand');
