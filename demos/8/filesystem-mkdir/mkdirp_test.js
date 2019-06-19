let mkdirp = require('./mkdirp.js'),
fs = require('fs');
mkdirp('./test/foo/bar').then(() => {
    console.log('we have the path! writing a file there...');
    fs.writeFile('./test/foo/bar/baz.txt', 'hey now!');
}).catch ((e) => {
    console.log(e.message);
});
