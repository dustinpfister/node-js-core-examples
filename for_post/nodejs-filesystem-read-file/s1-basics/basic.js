let fs = require('fs');

fs.readFile('./basic.js', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(Buffer.isBuffer(data)); // true
    console.log(typeof data); // 'object'
    console.log(data.toString()); // [text of this code]
});
