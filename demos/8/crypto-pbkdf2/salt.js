let crypto = require('crypto');

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

hashIt('weak123', '10000000')
.then((result) => {

    console.log(result.key);

});

hashIt('weak123', 'pu77fbaz')
.then((result) => {

    console.log(result.key);

});
