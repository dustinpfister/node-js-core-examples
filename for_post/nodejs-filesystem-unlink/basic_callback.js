let fs = require('fs'),
path = require('path'),

filePath = path.resolve(process.argv[2]);

fs.unlink(filePath, (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log('delete ' + filePath);
    }
});
