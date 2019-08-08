// Using my Random Letters Read Stream
let RandomLetters = require('./read_random_letters.js').RandomLetters;

// create an instance of the read stream
let readStream = RandomLetters({
        stopIf: function (buff, opt) {
            // no stop condition
            this.push(buff);
        }
    });
// So then I can just read and read and define my condition to stop
// by some other way such as using the readable.resume, read, and pause
// methods to control the flow state
console.log(readStream._readableState.flowing); // null
setInterval(function () {
    readStream.resume();
    process.stdout.write(readStream.read().toString());
    console.log(' ' + readStream._readableState.flowing); // true
    readStream.pause();
    console.log(' ' + readStream._readableState.flowing); // false
}, 1000);

