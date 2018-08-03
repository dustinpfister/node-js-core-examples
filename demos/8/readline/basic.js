let readline = require('readline');

let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

rl.setPrompt('>');
rl.prompt();

rl.on('line', (input) => {

    input = input.toLowerCase();

    switch (input) {

    case 'pwd':

        console.log(process.cwd());
        rl.prompt();

        break;

    case 'close':

        rl.close();

        break;

    default:

        rl.prompt();

        break;

    }

});

rl.on('resume', () => {

    console.log('>');

});
