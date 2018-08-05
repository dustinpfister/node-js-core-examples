let readline = require('readline');

let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '>'
    });

rl.prompt();

let options = {

    pwd: function () {

        console.log(process.cwd());
        rl.prompt();

    },

    close: function () {

        rl.close();

    }

};

rl.on('line', (input) => {

    input = input.toLowerCase();

    if (input in options) {

        options[input]();

    }

});

rl.on('resume', () => {

    console.log('>');

});
