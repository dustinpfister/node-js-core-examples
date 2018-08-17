let stream = require('stream');

let writer = new stream.Writable({

        write: function (chunk, enc, cb) {

            console.log(chunk.toString());

            cb(null);

        }

    });

writer.write('okay');

writer.write('hey!');
