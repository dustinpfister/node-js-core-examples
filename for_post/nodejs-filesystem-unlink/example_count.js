let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,

deleteFile = promisify(fs.unlink),
writeFile = promisify(fs.writeFile),
readFile = promisify(fs.readFile);

command = path.resolve(process.argv[2] || 'step');

let step = (filePath) => {
    let state = {};
    return readFile(filePath)
    .then((json) => {
        state = JSON.parse(json);
        state.count += 1;
        return writeFile(filePath, JSON.stringify(state), 'utf8');
    })
    .catch((e) => {
        if (e.code === 'ENOENT') {
            state = {
                count: 1
            };
            let json = JSON.stringify(state);
            return writeFile(filePath, json, 'utf8');
        } else {
            return Promise.reject(e);
        }
    })
    .then(() => {
        return Promise.resolve(state);
    });
};

step(path.join(process.cwd(), 'count.json'))
.then((state) => {
    console.log('count: ' + state.count);
})
.catch((e) => {
    console.log(e);
});
