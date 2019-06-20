var fs = require('fs'),
os = require('os'),
d = new Date(),
text = 'run on ' + d + os.EOL;
fs.appendFile('./test.txt', text, function (e) {
    if (e) {
        console.log(e.message);
    } else {
        console.log('text.txt updated');
        console.log(text);
        console.log('');
    }
});
