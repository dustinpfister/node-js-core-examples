let crypto = require('crypto'),
stream = require('stream'),
fs = require('fs');

let key = Buffer.alloc(32),
iv = Buffer.alloc(16)

let cipher = crypto.createCipheriv('aes-256-cbc',key, iv);

console.log(cipher);