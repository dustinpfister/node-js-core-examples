let fs = require('fs');

fs.readFile('./basic.js', 'utf8', (err, data) => {
    console.log(Buffer.isBuffer(data)); // false
    console.log(typeof data); // string
});
