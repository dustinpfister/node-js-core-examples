let fs = require('fs');

let reader = fs.createReadStream('README.md');

reader.on('ready', function () {

    console.log('this works in node 9.11+');

});
