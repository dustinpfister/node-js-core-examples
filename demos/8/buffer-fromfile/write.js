let fs = require('fs'),

// start a write stream in a+ mode
file = fs.createWriteStream(process.argv[2],{flags:'a+'});

// write to the file with a buffer
file.write(Buffer.from(process.argv[3]));

// end
file.end();
