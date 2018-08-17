let fs = require('fs');

let writer = fs.createWriteStream('test.txt', {
        flags: 'w'
    })

    // the open event is fired when the file is ready
    .on('open', function () {

        console.log('open');

    })

    .on('drain', function () {

        console.log('drain');

    })

    .on('error', function (err) {

        console.log(err.message);

    })

    .on('close', function () {

        console.log('close');

    })

    .on('finish', function () {

        console.log('finish');

    });

writer.write('this will fail if the file is there before hand');

//writer.write(65); // attempting to write a number (will cause an error)

writer.end(); // end the stream ( will fire on close)
