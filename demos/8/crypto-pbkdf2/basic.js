let crypto = require('crypto');

let pw = 'spaceballs-1234',
salt = 'lone-star',
i = 10000,
len = 16,
digest = 'sha512';

crypto.pbkdf2(pw, salt, i, len, digest, (e, key) => {
    console.log(key.toString('hex'));
    // b90854ed18358d7aa5cd70691f2337f4
});
