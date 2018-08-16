let crypto = require('crypto'),
fs = require('fs')

// key an iv buffers
let key = Buffer.alloc(32), 
iv = Buffer.alloc(16);

cipher = crypto.createCipheriv('aes-256-cbc',key, iv);

let reader = fs.createReadStream('test.txt')

.pipe(cipher)

.on('data', function(chunk){
    console.log(chunk.toString())

});
