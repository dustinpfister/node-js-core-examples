let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,

deleteFile = promisify(fs.unlink),
writeFile = promisify(fs.writeFile),
readFile = promisify(fs.readFile);

command = path.resolve(process.argv[2] || 'step'),
filePath = path.join(process.cwd(), 'count.json');

let stepCount = () => {
    let state = {};
    return readFile(filePath)
    .then((json) => {
        state = JSON.parse(json);
        state.mess = 'count updated: ' + new Date();
        state.count += 1;
        return writeFile(filePath, JSON.stringify(state), 'utf8');
    })
    .catch((e) => {
        if (e.code === 'ENOENT') {
            state = {
                mess: 'new count created: ' + new Date(),
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

let deleteCount = () => {
    return deleteFile(filePath)
    .then(() => {
        return Promise.resolve({
            count: 0,
            mess: 'count file deleted'
        });
    })
}

let Run = (command) => {
    command = command || 'step';
    if (command === 'step') {
        return stepCount();
    }
    if (command === 'kill') {
        return deleteCount();
    }
    return Promise.reject(new Error('unknown command'));
};

Run(process.argv[2])

.then((state) => {
    console.log('mess: ' + state.mess);
    console.log('count: ' + state.count);
})

.catch((e) => {

    console.log(e);

});
