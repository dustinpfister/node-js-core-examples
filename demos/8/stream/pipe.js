// Using my Random Letters Read Stream
let RandomLetters = require('./read_random_letters.js').RandomLetters;

// create an instance of the read stream
let readStream = RandomLetters({totalBytes: process.argv[2] || 1024 });

// pipe to a writable stream like the standard output
readStream.pipe(process.stdout);
