// Using my Random Letters Read Stream
let RandomLetters = require('./read_random_letters.js').RandomLetters;

// create an instance of the read stream
let readStream = RandomLetters({
        stopIf: function (buff, opt) {
            // no stop condition
            this.push(buff);
        }
    });

// this will go forever until I break with ctr+c
// because piping is a way to enter flowing state
readStream.pipe(process.stdout);


