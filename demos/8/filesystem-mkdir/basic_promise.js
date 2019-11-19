var fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,
mkdir = promisify(fs.mkdir);

mkdir(path.join(process.cwd(), 'test'))
.then(() => {
    console.log('created test folder');
})
.catch((e) => {
    console.log(e);
});
