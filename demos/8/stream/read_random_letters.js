let stream = require('stream');

// returns a RandomLetters Readable Stream
exports.RandomLetters = function (opt) {
    opt = opt || {};
    let byteCount = opt.startIndex === undefined ? 0: opt.startIndex,
    totalBytes = opt.totalBytes === undefined ? 1024: opt.totalBytes;
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
};
