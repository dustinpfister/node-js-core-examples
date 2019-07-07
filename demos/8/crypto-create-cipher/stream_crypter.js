let crypto = require('crypto');

let Crypter = (textHex, mode, algorithm, password) => {

    algorithm = algorithm || 'aes192';
    password = password || '1234-spaceballs';
    mode = mode || 'cipher';

    // give a rejected promise if no input is given
    if (textHex === undefined) {
        return Promise.reject('no input given');
    }

    // output string
    let out = '';

    // encodings for input and output
    let encoding = {
        input: 'utf8',
        output: 'hex'
    }

    // create the cipher or decipher,
    // and set appropriate encodings
    // depending on mode
    let Create = crypto.createCipher;
    if (mode === 'decipher') {
        Create = crypto.createDecipher;
        encoding.input = 'hex';
        encoding.output = 'utf8';
    }
    let cipher = Create(algorithm, password);

    // return a promise
    return new Promise((resolve, reject) => {
        cipher.on('readable', () => {
            let data = cipher.read();
            if (data) {
                out += data.toString(encoding.output);
            }
        });
        cipher.on('end', () => {
            resolve(out);
        });
        cipher.on('error', (e) => {
            reject(e.message);
        });
        cipher.write(textHex, encoding.input);
        cipher.end();
    });

};

// works of cipher and decipher
Crypter('hello there yes this is a stream.')
.then((hex) => {
    console.log(hex);
    return Crypter(hex, 'decipher');
})
.then((str) => {
    console.log(str);
})
.catch ((e) => {
    console.log(e);
})
