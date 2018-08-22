let crypto = require('crypto'),
path = require('path'),
fs = require('fs');

// Cipher Suites, key, and the iv
let a = 'aes-256-cbc',
filename = process.argv[2] || 'test.coded',
bName = path.basename(filename, path.extname(filename));

// read the key.json file
fs.readFile(bName + '-keys.json', function (err, data) {

    // keyfile will default to an empty object
    let keyFile = {}

    if (err) {

        // if error logg it
        console.log('error reading keys.json file');

    } else {

        // else parse the JSON
        try {

            keyFile = JSON.parse(data);

        } catch (e) {

            console.log(e);

        }

    }

    // use key, and iv given from the command line first if given, else use anything from a file, else default to hard coded values
    let key = Buffer.from(process.argv[3] || keyFile.key || '313233342d737061636562616c6c730000000000000000000000000000000000', 'hex'),
    iv = Buffer.from(process.argv[4] || keyFile.iv || '00000000000000000000000000000000', 'hex'),

    // make the cipher with the current suite, key, and iv
    cipher = crypto.createDecipheriv(a, key, iv);

    // read test.txt
    fs.createReadStream(filename)

    // pipe to cipher
    .pipe(cipher)

    // pipe to writer
    .pipe(fs.createWriteStream(bName + '.decoded'))

    // when done decoding
    .on('close', function () {

        console.log(filename + ' has been decoded using:');
        console.log('key:');
        console.log(key.toString('hex'));
        console.log('iv');
        console.log(iv.toString('hex'));
    });

});
