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

        let firstSpace = input.match(/\s/);

        // Get the command
        let com = input; // com default to input
        if (firstSpace) { // but if there is a space, it is what is before that space
            com = input.slice(0, firstSpace.index);
        }

        // get the text
        let text = ''; // text defaults to a blank sting
        if (firstSpace) { // but if there is a space, it is what is before that space
            text = input.slice(firstSpace.index + 1, input.length);
        }

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
