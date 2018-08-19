let fs = require('fs');

// setting the flags to a+ will create the file if it is not there
// however this is not a writable stream, so it will only just create
// a blank file
let reader = fs.createReadStream('mightnotbethere.txt',{flags:'a+'});

reader.on('data', function (chunk) {

    console.log(chunk.toString());

});
