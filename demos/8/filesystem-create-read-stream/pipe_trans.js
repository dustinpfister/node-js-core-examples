let fs = require('fs'),
stream = require('stream'),
marked = require('marked'),


trans = new stream.Transform({

        write: function (chunk, enc, next) {

            //this.push(chunk.toString());

            next(null);

        }

    });
	
	
fs.createReadStream('README.md')

.pipe(trans)

.on('data', function(chunk){
	
	console.log(chunk);
	
})
