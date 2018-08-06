let readline = require('readline');

let conf = {

    a: 0,
    d: 100,
    sx: 0,
    sy: 0

};

let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'c=(' + conf.sx + ',' + conf.sy + ') a=' + conf.a + ' d=' + conf.d + ' >'
    });

rl.prompt();

let commands = {

    // find unknown (point on circle)
    find: function () {

        let x = Math.cos(conf.a) * conf.d + conf.sx,
        y = Math.sin(conf.a) * conf.d + conf.sy;

        console.log(x, y);

        rl.prompt();

    },

    // exit
    exit: function () {

        rl.close();

    }

};

rl.on('line', (input) => {

    input = input.toLowerCase();

    if (input in commands) {

        commands[input]();

    } else {

        rl.prompt();

    }

});
