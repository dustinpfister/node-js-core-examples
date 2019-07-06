let crypto = require('crypto'),
algorithm = 'aes192',
password = process.argv[2] || 'password1234',
cipher = crypto.createCipher(algorithm, password),
decipher = crypto.createDecipher(algorithm, password),
hex = cipher.update('This is something I want encrypted', 'utf8', 'hex');
hex += cipher.final('hex');
console.log(hex);
// the hex can be deciphered in a similar way
let str = decipher.update(hex, 'hex', 'utf8');
str += decipher.final('utf8');
console.log(str);