let stream = require('stream');

let writer = new stream.Writable({

        write: function (chunk) {

            console.log(chunk.toString());

        }

    });

console.log(writer.write('okay'));