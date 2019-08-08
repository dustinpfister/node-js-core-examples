// Using my Random Letters Read Stream
let RandomLetters = require('./read_random_letters.js').RandomLetters;

// create an instance of the read stream
let readStream = RandomLetters({
        stopIf: function (buff, opt) {
            // no stop condition
            this.push(buff);
        }
    });

// if uncommented this will go forever until I break with ctr+c
// readStream.pipe(process.stdout);

// So then I can just read and read and define my condition to stop
// some other way
let loop = () => {
    let letter = readStream.read().toString();
    process.stdout.write(letter);
    if (letter != 'A') {
        loop();
    }
};
loop();
