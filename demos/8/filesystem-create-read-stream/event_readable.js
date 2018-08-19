let fs = require('fs');

let reader = fs.createReadStream('README.md',{highWaterMark:16}).pause();

reader.on('data', function(chunk){  console.log(chunk);})

// readable event
reader.on('readable', function () {

    console.log('ready to read');

    this.read();

});
