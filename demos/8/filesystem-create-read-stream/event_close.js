let fs = require('fs');

fs.createReadStream('README.md')

.on('data', function (chunk) {

    console.log(chunk);

})

.on('close', function () {

    console.log('file discripter closed');

})

.on('end', function () {

    console.log('stream ended');

})
