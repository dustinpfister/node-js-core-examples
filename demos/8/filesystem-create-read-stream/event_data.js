let fs = require('fs');

fs.createReadStream('README.md')

.pipe(fs.createWriteStream('README_copy.md'))

.on('data', function (chunk) {

    console.log(chunk.toString());

});
