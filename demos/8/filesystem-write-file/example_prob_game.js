let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,

// promisifying node write and read methods
write = promisify(fs.writeFile),
read = promisify(fs.readFile);

// robust read state method that will create a state
// if it is not there
let readState = (dir_root, fileName) => {

    dir_root = path.resolve(dir_root || process.cwd());
    fileName = fileName || 'game_prob_state.json';
    let path_state = path.join(dir_root, fileName);

    return read(fileName)
    .catch((e) => {
        if (e.code === 'ENOENT') {
            let json = JSON.stringify({
                    won: 0,
                    lost: 0,
                    prob: 51
                });
            return write(path_state, json, 'utf8');
        } else {
            return Promise.reject(e);
        }
    })
    .then(() => {
        return read(fileName);
    });

};

let playRound = (dir_root, fileName) => {

    dir_root = path.resolve(dir_root || process.cwd());
    fileName = fileName || 'game_prob_state.json';
    let path_state = path.join(dir_root, fileName);

    let state = {},
    roll = Math.random() * 100;

    return readState(dir_root, fileName)
    .then((json) => {
        state = JSON.parse(json);
        if (roll <= state.prob) {
            state.won += 1;
        } else {
            state.lost += 1;
        }
        return write(path_state, JSON.stringify(state), 'utf8');
    })
    .catch((e) => {
        return Promise.reject(e);
    })
    .then(() => {
        return Promise.resolve(state);
    });

};

playRound(process.cwd(), process.argv[2] || 'game_default.json')
.then((result) => {
    console.log(result);
});
