let crypto = require('crypto');

// hast it function that just takes a 
// password and a salt value with hard coded
// values for everything else
let hashIt = (pw, salt) => {
    let i = 10000,
    len = 16,
    digest = 'sha512';
    if (!pw) {
        return Promise.reject('invalid password');
    }
    if (!salt) {
        return Promise.reject('salt must be given');
    }
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(pw, salt, i, len, digest, (e, key) => {
            if (e) {
                reject(e)
            } else {
                resolve({
                    key: key,
                    salt: salt
                });
            }
        });
    });
};

// the same password results in different keys
hashIt('weak123', '10000000')
.then((result) => {
    console.log(result.key.toString('hex'));
    // c64152a63e3c35710ee22e6cf598801a
});
hashIt('weak123', 'pu77fbaz')
.then((result) => {
    console.log(result.key.toString('hex'));
    // fa5e869e389ff97f7a00bde481a91ae5
});
