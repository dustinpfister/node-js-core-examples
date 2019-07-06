let crypto = require('crypto'),
cipher = crypto.createCipher('aes192', 'password1234');
// the cipher update method can be used to encrypt data
let hex = cipher.update('This is something I want encrypted', 'utf8', 'hex');
// the cipher.final method must be called to complete the process
hex += cipher.final('hex')
console.log(hex);
// 84808c0d587c6c1259e65054f6779c2ba5db0c95c594bed97118b8c718381dab7a87ad880b4fbf71f05a21980dc9f409
