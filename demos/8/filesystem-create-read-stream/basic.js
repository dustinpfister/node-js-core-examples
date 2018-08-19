require('fs')

.createReadStream('README.md')

.on('data', function (chunk) {

    console.log(chunk.toString());

});
