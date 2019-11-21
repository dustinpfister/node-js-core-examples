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
                    prob: 51,
                    money: 0
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

// play a round
let playRound = (dir_root, fileName) => {

    dir_root = path.resolve(dir_root || process.cwd());
    fileName = fileName || 'game_prob_state.json';
    let path_state = path.join(dir_root, fileName);

    let state = {},
    roll = Math.random() * 100,
    bet = 1;

    return readState(dir_root, fileName)
    .then((json) => {
        state = JSON.parse(json);
        if (roll <= state.prob) {
            state.won += 1;
            state.money += bet;
        } else {
            state.lost += 1;
            state.money -= bet;
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

let count = 0,
maxCount = 10000;
let loop = function () {

    playRound(process.cwd(), process.argv[2] || 'game_default.json')
    .then((result) => {
        console.log(count, result);
        count += 1;
        if (count < maxCount) {
            loop();
        }
    });

};
loop();
