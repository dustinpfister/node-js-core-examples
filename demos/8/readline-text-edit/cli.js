let readline = require('readline'),
path = require('path'),
fs = require('fs'),

openFile = require('./open-file'),

// fine path to file
dir = 'temp.txt';

let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '>'
    });

if (process.argv[2]) {
    dir = process.argv[2]
}
dir = path.resolve(dir);

let commands = {

    exit: function () {

        rl.close();

    }

}

// open the edit API
openFile.editAPI(dir).then((api) => {

    rl.on('line', (input) => {

        if (input in commands) {

            commands[input](api);

        }

    });

    api.read().then((buff) => {

        console.log(buff.toString())
        rl.prompt();

    }).catch ((err) => {

        console.log(err);

    });

}).catch ((err) => {

    console.log('error with edit api');
    console.log(err);

})
