let color = {
    byNum: (mess, fgNum, bgNum) => {
        mess = mess || '';
        fgNum = fgNum === undefined ? 31 : fgNum;
        bgNum = bgNum === undefined ? 47 : bgNum;
        return '\u001b[' + fgNum + 'm' + '\u001b[' + bgNum + 'm' + mess + '\u001b[39m\u001b[49m';
    },
    black: (mess, fgNum) => color.byNum(mess, 30, fgNum),
    red: (mess, fgNum) => color.byNum(mess, 31, fgNum),
    green: (mess, fgNum) => color.byNum(mess, 32, fgNum),
    yellow: (mess, fgNum) => color.byNum(mess, 33, fgNum),
    blue: (mess, fgNum) => color.byNum(mess, 34, fgNum),
    magenta: (mess, fgNum) => color.byNum(mess, 35, fgNum),
    cyan: (mess, fgNum) => color.byNum(mess, 36, fgNum),
    white: (mess, fgNum) => color.byNum(mess, 37, fgNum)

};

let text = 'hello world.';
console.log(color.black(text));
console.log(color.red(text));
console.log(color.green(text));
console.log(color.yellow(text));
console.log(color.blue(text));
console.log(color.magenta(text));
console.log(color.cyan(text));
console.log(color.white(text, 40));
