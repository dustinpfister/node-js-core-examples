let readline = require('readline');

let conf = {

    a: 0,
    d: 100,
    sx: 0,
    sy: 0,

    getPrompt: function () {

        return 'c=(' + this.sx + ',' + this.sy + ') a=' + this.a + ' d=' + this.d + ' >';

    }

};

let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: conf.getPrompt()
    });

rl.prompt();

let commands = {

    // set angle command ( >a 45 )
    a: function (text) {

        conf.a = !text ? 0 : Number(text);

        conf.a = Math.PI / 180 * conf.a;

        conf.a = Number(conf.a.toFixed(2));

        // update the prompt
        rl._prompt = conf.getPrompt();

        rl.prompt();

    },

    // set distance command ( >d 250 )
    d: function (text) {

        conf.d = !text ? 100 : Number(text);

        // update the prompt
        rl._prompt = conf.getPrompt();

        rl.prompt();

    },

    // set center point command ( >c 90,37 )
    c: function (text) {

        conf.sx = 0;
        conf.sy = 0;

        if (text) {

            text = text.split(',');

            conf.sx = Number(text[0] || x);
            conf.sy = Number(text[1] || y);

        }

        // update the prompt
        rl._prompt = conf.getPrompt();

        rl.prompt();

    },

    // find unknown point on circle ( >f )
    f: function () {

        let x = Math.cos(conf.a) * conf.d + conf.sx,
        y = Math.sin(conf.a) * conf.d + conf.sy;

        console.log('(' + x.toFixed(2) + ',' + y.toFixed(2) + ')');

        rl.prompt();

    },

    // exit
    exit: function () {

        rl.close();

    }

};

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

        commands[com](text);

    } else {

        rl.prompt();

    }

});
