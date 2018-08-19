let fs = require('fs'),
reader = fs.createReadStream('README.md');

reader.on('data', function (chunk) {

    console.log(chunk.toString());

});
