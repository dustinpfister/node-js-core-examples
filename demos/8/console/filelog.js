let fs = require('fs'),
out = fs.createWriteStream('output.txt'),
err = fs.createWriteStream('errorlog.txt'),

logger = new console.Console(out, err);

logger.log('hello world');

logger.error( new Error('my Custom error has happened') );