
let setCur = (x, y) => {
    x = x || 0;
    y = y || 0;
    process.stdout.write('\u001b[' + x + ';' + y + 'H');
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
    clearScreen();
    setCur(0, 0);
    colorsSet();
    // draw area
    process.stdout.write('..........\n');
    process.stdout.write('..........\n');
    process.stdout.write('..........\n');
    process.stdout.write('..........\n');
    // save cursor
    process.stdout.write('\u001b[s');
    // draw at symbol
    setCur(0, 0);
    process.stdout.write('@');
    colorsDefault();

};

draw();

// restore cursor
process.stdout.write('\u001b[u');

//colorsDefault();

/*
@.........
..........
..........
..........
*/
