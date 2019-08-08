let stream = require('stream');

let B64 = function () {

    return new stream.Writable({
        write: function (chunk, enc, cb) {
            console.log(chunk.toString('base64'));
            cb(null);
        }
    });

};

let writer = B64();

writer.write('foobar');
