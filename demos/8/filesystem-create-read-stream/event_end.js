let fs = require('fs');

fs.createReadStream('README.md')

.on('open', function () {

    // setting auto close to false
    this.autoClose = false;

})

.on('data', function (chunk) {

    console.log(chunk);

})

// the end event is fired when 
// there is no more data to read, but 
// has not been closed yet
.on('end', function () {

    let s = this;
    setTimeout(function () {

       // the destroy method can be used to
       // close the stream manually
        s.destroy();

    }, 3000);

})

.on('close', function () {

    console.log('closed now');

});
