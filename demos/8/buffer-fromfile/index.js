let fs = require('fs'),

buff = Buffer.alloc(0);

// start a read stream for a test.txt file
fs.createReadStream('test.txt')

.on('data', function (chunk) {

    // concatenate buff, and chunk both of which are buffers
    buff = Buffer.concat([buff, chunk], buff.length + chunk.length);

})

.on('end', function () {

    console.log(buff.toString());

})
