let fs = require('fs');

fs.createReadStream('file-that-is-not-there.txt',{flags:'r'})

.on('data', function (chunk) {

    console.log(chunk);

})

// this will fire if the file is not there
.on('error', function (err) {

    console.log(err);

});
