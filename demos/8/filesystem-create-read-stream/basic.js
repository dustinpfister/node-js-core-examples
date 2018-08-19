let fs = require('fs');

let reader = fs.createReadStream('README.md');

reader.on('data', function (chunk) {

    console.log(chunk.toString());

});
