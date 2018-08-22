let crypto = require('crypto'),
path = require('path'),
fs = require('fs');

// Cipher Suites, key, and the iv
let a = 'aes-256-cbc',
//key = Buffer.alloc(32), // key should be 32 bytes
//iv = Buffer.alloc(16), // iv should be 16

filename = process.argv[2] || 'test.coded',
key = Buffer.from(process.argv[3] || '313233342d737061636562616c6c730000000000000000000000000000000000','hex'),
iv = Buffer.from(process.argv[4] || '00000000000000000000000000000000','hex');

// make the cipher with the current suite, key, and iv
let cipher = crypto.createDecipheriv(a, key, iv);

// read test.txt
fs.createReadStream(filename)

// pipe to cipher
.pipe(cipher)

// pipe to writer
.pipe(fs.createWriteStream(path.basename(filename,path.extname(filename))+'.decoded'))

.on('close', function () {

    console.log(filename + ' has been decoded using:');
    console.log('key:');
    console.log(key.toString('hex'));
    console.log('iv');
    console.log(iv.toString('hex'));
});