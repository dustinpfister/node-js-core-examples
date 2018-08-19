let fs = require('fs'),
stream = require('stream'),
marked = require('marked'),

trans = new stream.Transform({

        transform: function (chunk, enc, next) {

            this.push(chunk.toString());

            next(null);

        },

        final: function () {

            fs.writeFile('README.html', marked(this.read().toString()), function () {

                console.log('html file written');

            });

        }

    });

fs.createReadStream('README.md')

.pipe(trans);
