let crypto = require('crypto');

let CryptIt = (text, algorithm, password) => {
    let hex = '';
    algorithm = algorithm || 'aes192';
    password = password || '1234-spaceballs';
    if (text === undefined) {
        return Promise.reject('no text given');
    }
    return new Promise((resolve, reject) => {
        let cipher = crypto.createCipher(algorithm, password);
        cipher.on('readable', () => {
            let data = cipher.read();
            if (data) {
                hex += data.toString('hex');
            }
        });
        cipher.on('end', () => {
            resolve(hex);
        });
        cipher.on('error', (e) => {
            reject(e.message);
        });
        cipher.write(text, 'utf8');
        cipher.end();
    });
};

let DeCryptIt = (hex, algorithm, password) => {
    let str = '';
    algorithm = algorithm || 'aes192';
    password = password || '1234-spaceballs';
    if (hex === undefined) {
        return Promise.reject('no hex given');
    }
    return new Promise((resolve, reject) => {
        let decipher = crypto.createDecipher(algorithm, password);
        decipher.on('readable', () => {
            let data = decipher.read();
            if (data) {
                str += data.toString('utf8');
            }
        });
        decipher.on('end', () => {
            resolve(str);
        });
        decipher.on('error', (e) => {
            reject(e.message);
        });
        decipher.write(hex, 'hex');
        decipher.end();
    });
};

CryptIt('hello there yes this is a stream.')
.then((hex) => {
    console.log(hex);
    return DeCryptIt(hex);
})
.then((str) => {
    console.log(str);
})
.catch ((e) => {
    console.log(e);
})
