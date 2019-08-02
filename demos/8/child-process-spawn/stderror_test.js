let fs = require('fs'),
filename = process.argv[2] || 'not-there.txt';
console.log(filename);
fs.readFile(filename, 'utf8', (e, data) => {
    if (e) {
        console.warn('\u001b[31m' + e.message + '\u001b[39m');
    } else {
        console.log('\u001b[32m' + data.toString() + '\u001b[39m');
    }
});
