let fs = require('fs'),
promisify = require('util').promisify,
path = require('path');

let openFile = (path_file) => {
    let state = {
        fd: null,
        stat: {},
        path_file: path_file,
        startSize: 0
    };
    return promisify(fs.stat)(path_file)
    .then((stat) => {
        state.startSize = stat.size;
        state.stat = stat;
        return Promise.resolve();
    })
    .catch((e) => {
        if (e.code === "ENOENT") {
            state.startSize = 0;
            return Promise.resolve(state);
        }
        return Promise.reject(e);
    })
    .then(() => {
        return promisify(fs.open)(path_file, 'w+', 0o666);
    })
    .then((fd) => {
        state.fd = fd;
        return Promise.resolve(state);
    });
};

openFile(path.join(process.cwd(), 'db.one.txt'))

.then((state) => {

    console.log(state);

})
