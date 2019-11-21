let fs = require('fs'),
path = require('path'),
cwd = process.cwd();

fs.stat(path.join(cwd, 'README.md'), function (e, stats) {
    if (e) {
        console.log(e);
    }
    console.log(stats);
});
