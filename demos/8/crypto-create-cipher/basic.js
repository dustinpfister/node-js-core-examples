let crypto = require('crypto'),
cipher = crypto.createCipher('aes192', 'password1234');

let hex = cipher.update('This is something I want encrypted', 'utf8', 'hex');

// 84808c0d587c6c1259e65054f6779c2ba5db0c95c594bed97118b8c718381dab
console.log(hex);

// attempting to convert the hex to plain text will not
// work.
console.log(Buffer.from(hex,'hex').toString('utf8'));
// [encrypted string]
