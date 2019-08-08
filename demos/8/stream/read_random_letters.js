let stream = require('stream');

// default stop if method
let stopIf = function (buff, opt) {
    if (opt.byteIndex < opt.totalBytes) {
        // use the push method to push data to be
        // consumed
        this.push(buff);
    } else {
        // push null when done
        this.push(null);
    }
};

// returns a RandomLetters Readable Stream
exports.RandomLetters = function (opt) {
    opt = opt || {};
    opt.byteIndex = opt.byteIndex === undefined ? 0 : opt.byteIndex;
    opt.totalBytes = opt.totalBytes === undefined ? 1024 : opt.totalBytes;
    opt.stopIf = opt.stopIf || stopIf;
    return new stream.Readable({
        highWaterMark: 1,
        // must have a read method
        read: function (size) {

            // generate some data
            let n = 65 + Math.round(25 * Math.random());
            let buff = Buffer.from(n.toString(16), 'hex');

            // call stopIf and step index
            opt.stopIf.call(this, buff, opt);
            opt.byteIndex += 1;
            if (opt.byteIndex > opt.totalBytes) {
                opt.byteIndex %= opt.totalBytes;
            }
        }
    });
};
