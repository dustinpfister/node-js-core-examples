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

writer.write('So this will be based 64 encoded');
//U28gdGhpcyB3aWxsIGJlIGJhc2VkIDY0IGVuY29kZWQ= 
