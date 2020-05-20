let fs = require('fs'),
path = require('path'),
cwd = process.cwd();

fs.symlink(path.join(cwd,'..'), path.join(cwd, 'back'), 'junction', (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log('made a link');
    }
});
