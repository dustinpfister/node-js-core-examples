let stream = require('stream');

let WB64 = function (opt) {
    opt = opt || {};
    opt.toB64 = opt.toB64 === undefined ? true : opt.toB64;
    if (opt.toB64) {
        return new stream.Writable({
            write: function (chunk, enc, cb) {
                console.log(chunk.toString('base64'));
                cb(null);
            }
        });
    }
    return new stream.Writable({
        write: function (chunk, enc, cb) {
            console.log(Buffer.from(chunk.toString('utf8'), 'base64').toString());
            cb(null);
        }
    });
};

let toB64 = WB64(),
fromB64 = WB64({
        toB64: false
    });
toB64.write('So this will be based 64 encoded');
// U28gdGhpcyB3aWxsIGJlIGJhc2VkIDY0IGVuY29kZWQ=
fromB64.write('U28gdGhpcyB3aWxsIGJlIGJhc2VkIDY0IGVuY29kZWQ=');
// So this will be based 64 encoded
