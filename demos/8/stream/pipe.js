let stream = require('stream');

let RandomLetters = (function () {
    let byteCount = 0,
    totalBytes = process.argv[2] || 1024;
    return new stream.Readable({
        // must have a read method
        read: function () {
            let n = 65 + Math.round(25 * Math.random());
            let buff = Buffer.from(n.toString(16), 'hex');
            if (byteCount < totalBytes) {
                // use the push method to push data to be
                // consumed
                this.push(buff);
            } else {
                // push null when done
                this.push(null);
            }
            byteCount += 1;
        }
    });
}
    ());

// write to the standard output one byte at a time
process.stdout.write(RandomLetters.read().toString('utf8'));
process.stdout.write(RandomLetters.read().toString('utf8'));

// or pipe to the standard output
RandomLetters.pipe(process.stdout);
