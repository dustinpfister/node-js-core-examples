let crypto = require('crypto'),
stream = require('stream'),
fs = require('fs')

    // Cipher Suites, key, and the iv
    let a = 'aes-256-cbc',
key = Buffer.alloc(32), // key should be 32 bytes
iv = Buffer.alloc(16); // iv should be 16

// make the key something other than a blank buffer
key = Buffer.concat([Buffer.from('1234-spaceballs-was-the-best-movie-ever!')], key.length)

    // randomize the iv, for best results
    iv = Buffer.from(Array.prototype.map.call(iv, function () {
            return Math.floor(Math.random() * 256)
        }));

// make the cipher with the current suite, key, and iv
let cipher = crypto.createCipheriv(a, key, iv);