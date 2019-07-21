let crypto = require('crypto');

let genKey = (pw, salt, len) => {
    pw = pw || 'foo';
    salt = salt || 'bar';
    len = len || 16;
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(pw, salt, 100, len, 'sha512', (e, key) => {
            if (e) {
                reject(e);
            } else {
                resolve(key)
            }
        });
    });
};

genKey()
.then((key) => {
    console.log(key.toString('hex'));
})
.catch ((e) => {

    console.log(e.message);

});
