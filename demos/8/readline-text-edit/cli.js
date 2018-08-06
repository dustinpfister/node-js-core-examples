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

    },

    write: function (api, text) {

        api.write(text).then((res) => {

            console.log(res.bytes + ' bytes have been written');
            rl.prompt();

        }).catch ((err) => {

            console.log(err);
            rl.prompt();

        })

    }

}

// open the edit API
openFile.editAPI(dir).then((api) => {

    rl.on('line', (input) => {

        let sp = input.split(/^ /),
        com = sp[0] || '',
        text = sp[1] || '';

        if (com in commands) {

            commands[com](api, text);

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
