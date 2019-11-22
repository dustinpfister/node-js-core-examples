let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,
deleteFile = promisify(fs.unlink),

filePath = path.resolve(process.argv[2]);

deleteFile(filePath)
.then(() => {
    console.log('delete ' + filePath);
})
.catch(() => {
    console.log(e);
});
