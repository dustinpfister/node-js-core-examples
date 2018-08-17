let fs = require('fs');

let writer = fs.createWriteStream('test.txt');

writer.write('this is only a test');