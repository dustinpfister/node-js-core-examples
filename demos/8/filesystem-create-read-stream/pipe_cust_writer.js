let fs = require('fs'),
stream = require('stream'),
marked = require('marked'),

reader = fs.createReadStream('README.md'),

writer = new stream.Writable({

    write: function (chunk, enc, next) {

        console.log( marked(chunk.toString()) );

        next(null);

    }

});

reader.pipe(writer);


