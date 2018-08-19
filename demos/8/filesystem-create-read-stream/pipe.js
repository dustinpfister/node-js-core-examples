let fs = require('fs'),
stream = require('stream'),

reader = fs.createReadStream('README.md'),

writer = fs.createWriteStream('README_copy.md');

reader.pipe(writer);