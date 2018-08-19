let fs = require('fs'),
stream = require('stream'),
marked = require('marked'),

reader = fs.createReadStream('README.md'),

writer = new stream.Writable({

        write: function (chunk, enc, next) {

            let s = this;

            this.body = this.body || Buffer.alloc(0);

            this.body = Buffer.concat([this.body, chunk]);

            next(null);

        },

        final: function () {

            console.log(this.body);

        }

    });

reader.pipe(writer);
