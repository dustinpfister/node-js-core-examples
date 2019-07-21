let crypto = require('crypto');

let hashIt = (i) => {

    let pw = 'foobar',
    salt = '1234',
    len = 16,
    digest = 'sha512';

    let st = new Date();
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(pw, salt, i, len, digest, (e, key) => {
            let et = new Date();
            if (e) {
                reject(e)
            } else {
                resolve({
                    key: key,
                    salt: salt,
                    st: st,
                    et: et,
                    time: et - st
                });
            }
        });
    });
};

hashIt(100)
.then((result) => {
    console.log(result.key.toString('hex'));
    console.log(result.time);
// 7516922ba2f536c4efca1f1dc418fbcb
// 0
});
hashIt(1000000)
.then((result) => {
    console.log(result.key.toString('hex'));
    console.log(result.time);
// 2e2cb3ccffb9bc6b31bce711e581bbfb
// 3296
});
