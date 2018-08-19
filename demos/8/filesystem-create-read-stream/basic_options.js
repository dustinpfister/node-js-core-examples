let fs = require('fs'),
reader = fs.createReadStream('README.md', {
    flag: 'a+',
    encoding: 'ascii',
    start: 8,
    end: 64,
    highWaterMark: 16
});
 
reader.on('data', function (chunk) {
 
    console.log(chunk.toString());
 
});
