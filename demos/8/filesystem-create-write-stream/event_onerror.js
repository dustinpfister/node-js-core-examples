let fs = require('fs');

// a writer in 'wx+' mode that will fail if the file
// all ready exists
let writer = fs.createWriteStream('test.txt',{flags:'wx+'})

.on('error', function (err) {

    console.log(err);

});

writer.write('this will fail if the file is there before hand');
