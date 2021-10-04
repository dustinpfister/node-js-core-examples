let fs = require('fs');

fs.readFile('./s1_basic.js', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});
