// Set the position of a cursor
let setCur = (x, y) => {
    x = x || 0;
    y = y || 0;
    process.stdout.write('\u001b[' + y + ';' + x + 'H');
}
let clearScreen = () => {
    process.stdout.write('\u001b[2J');
}
let colorsSet = () => {
    process.stdout.write('\u001b[47m');
    process.stdout.write('\u001b[30m');
};
let colorsDefault = () => {
    // reset colors
    process.stdout.write('\u001b[39m\u001b[49m');

};
let draw = (opt) => {
    opt = opt || {};
    opt.x = opt.x || 1;
    opt.y = opt.y || 1;
    clearScreen();
    setCur(1, 1);
    colorsSet();
    // draw area
    process.stdout.write('..........\n');
    process.stdout.write('..........\n');
    process.stdout.write('..........\n');
    process.stdout.write('..........\n');
    process.stdout.write('move: wasd; exit: x');
    // save cursor
    process.stdout.write('\u001b[s');
    // draw at symbol
    setCur(opt.x, opt.y);
    process.stdout.write('@');
    colorsDefault();

};

let pos = {
    x: 1,
    y: 1,
    w: 10,
    h: 4
};
draw(pos);

// restore cursor
process.stdout.write('\u001b[u');

//colorsDefault();
process.stdin.on('pause', (data) => {
    console.log('pause');
});
process.stdin.setRawMode(true)
process.stdin.on('data', (data) => {
    let input = data.toString().trim();

    if (input === 'd') {
        pos.x += 1;
    }
    if (input === 'a') {
        pos.x -= 1;
    }
    if (input === 'w') {
        pos.y -= 1;
    }
    if (input === 's') {
        pos.y += 1;
    }
    if (input === 'x') {
        process.exit()
    }

    draw(pos);
    setCur(1, 6);

});

/*
@.........
..........
..........
..........
*/
