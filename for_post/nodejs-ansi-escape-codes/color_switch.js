let color = {
    byNum: (mess, fgNum, bgNum) => {
        mess = mess || '';
        fgNum = fgNum === undefined ? 31 : fgNum;
        bgNum = bgNum === undefined ? 47 : bgNum;
        return '\u001b[' + fgNum + 'm' + '\u001b[' + bgNum + 'm' + mess + '\u001b[39m\u001b[49m';
    },
    black: (mess) => color.byNum(mess, 30),
    red: (mess) => color.byNum(mess, 31),
    green: (mess) => color.byNum(mess, 32),
    yellow: (mess) => color.byNum(mess, 33),
    blue: (mess) => color.byNum(mess, 34),
    magenta: (mess) => color.byNum(mess, 35),
    cyan: (mess) => color.byNum(mess, 36),
    white: (mess) => color.byNum(mess, 37)

};

let text = 'hello world.';
console.log(color.black(text, 31));
console.log(color.red(text, 31));
console.log(color.green(text, 31));
console.log(color.yellow(text, 31));
console.log(color.blue(text, 31));
console.log(color.magenta(text, 31));
console.log(color.cyan(text, 31));
console.log(color.white(text, 31));
