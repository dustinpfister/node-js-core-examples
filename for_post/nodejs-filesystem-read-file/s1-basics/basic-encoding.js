let fs = require('fs');

fs.readFile('./basic.js', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(Buffer.isBuffer(data)); // false
    console.log(typeof data); // string
});
