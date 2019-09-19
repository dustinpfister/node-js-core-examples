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
    process.stdout.write('\u001b[39m\u001b[49m');

};
// draw the area and at symbol
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
    // draw at symbol
    setCur(opt.x, opt.y);
    process.stdout.write('@');
    colorsDefault();

};
// start position
let pos = {
    x: 1,
    y: 1,
    w: 10,
    h: 4
};
draw(pos);
setCur(1, 6);
// set in raw mode and capture key strokes
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
    pos.x = pos.x > pos.w ? pos.w: pos.x;
    pos.y = pos.y > pos.h ? pos.h: pos.y;
    draw(pos);
    setCur(1, 6);
});
