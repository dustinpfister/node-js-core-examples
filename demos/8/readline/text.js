let readline = require('readline'),
path = require('path'),
dir,
fs = require('fs');

let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '>'
    });

rl.prompt();

// first argument should be a file to open
if (process.argv[2]) {

    dir = path.resolve(process.argv[2]);

    fs.readFile(dir, 'utf-8', function (err, text) {

        if (!err) {

            console.log(text);

        }

    })

}

rl.on('line', (input) => {

    console.log(dir);

});
