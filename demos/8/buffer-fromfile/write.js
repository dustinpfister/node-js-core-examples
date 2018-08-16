let fs = require('fs'),

buff = Buffer.alloc(0);

// start a read stream for a test.txt file
let file = fs.createWriteStream(process.argv[2],{flags:'a+'});

file.write(process.argv[3]);

file.end();
