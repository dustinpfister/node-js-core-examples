let crypto = require('crypto'),
algorithm = 'aes192',
password = process.argv[2] || 'password1234',
cipher = crypto.createCipher(algorithm, password),
decipher = crypto.createDecipher(algorithm, password);

let hex = cipher.update('This is something I want encrypted', 'utf8', 'hex');
hex += cipher.final('hex');
console.log(hex);

// attempting to convert the hex to plain text will not
// work.
console.log(Buffer.from(hex, 'hex').toString('utf8'));
// [encrypted string]

// the hex must be deciphered
let str = decipher.update(hex, 'hex', 'utf8');
str += decipher.final('utf8');
console.log(str)
