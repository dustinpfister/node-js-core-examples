let crypto = require('crypto'),
path = require('path'),
fs = require('fs');

// Cipher Suites, key, and the iv
let a = 'aes-256-cbc',
filename = process.argv[2] || 'test.coded',
bName = path.basename(filename, path.extname(filename));

fs.readFile(bName + '-keys.json', function (err, data) {

    let keyFile = {}

    if (err) {

        console.log('error reading keys.json file');

    } else {

        try {

            keyFile = JSON.parse(data);

        } catch (e) {

            console.log(e);

        }

    }

    let key = Buffer.from(process.argv[3] || keyFile.key || '313233342d737061636562616c6c730000000000000000000000000000000000', 'hex'),
    iv = Buffer.from(process.argv[4] || keyFile.iv || '00000000000000000000000000000000', 'hex')

        // make the cipher with the current suite, key, and iv
        cipher = crypto.createDecipheriv(a, key, iv);

    // read test.txt
    fs.createReadStream(filename)

    // pipe to cipher
    .pipe(cipher)

    // pipe to writer
    .pipe(fs.createWriteStream(bName + '.decoded'))

    .on('close', function () {

        console.log(filename + ' has been decoded using:');
        console.log('key:');
        console.log(key.toString('hex'));
        console.log('iv');
        console.log(iv.toString('hex'));
    });

});
