let fs = require('fs');

let reader = fs.createReadStream('README.md').pause();

reader.on('data', function(chunk){  console.log(chunk);})

reader.on('readable', function () {

    console.log('this is now readable');

    this.read();

});
