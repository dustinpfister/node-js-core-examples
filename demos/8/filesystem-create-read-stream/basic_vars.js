let fs = require('fs'),
reader = createReadStream('README.md');

reader.on('data', function (chunk) {

    console.log(chunk.toString());

});
