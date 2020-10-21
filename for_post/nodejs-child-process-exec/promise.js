let exec = require('child_process').exec,
path = require('path');

// just check if this is a git folder
let gitFolderCheck = (dir) => {
    return new Promise((resolve, reject) => {
        let check = exec('git status', {
                cwd: dir === undefined ? process.cwd() : dir
            });
        check.on('exit', (code) => {
            console.log('the folder: ' + dir);
            if (code === 0) {
                resolve('is a git folder');
            } else {
                reject('is NOT a git folder');
            }
        });
    });
};

gitFolderCheck(path.resolve(process.argv[2]) || process.cwd())
.then((mess) => {
    console.log(mess);
})
.catch((e) => {
    console.log(e);
});
