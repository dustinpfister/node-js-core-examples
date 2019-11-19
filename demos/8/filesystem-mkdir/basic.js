var fs = require('fs'),
path = require('path');
fs.mkdir(path.join(process.cwd(), 'test'), function (e) {
    if (e) {
        console.log(e)
    } else {
        console.log('created test folder');
    }
});
