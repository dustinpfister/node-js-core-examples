let fs = require('fs');

let reader = fs.createReadStream('README.md').pause();

reader.on('open', function () {

    console.log('file open');

})

reader.on('data', function (chunk) {

    console.log(chunk);

});

console.log('hold on...');
setTimeout(function () {

    reader.resume();

}, 3000);
