let color = {

    byNum: (mess, fgNum) => {
        mess = mess || '';
        fgNum = fgNum === undefined ? 31 : fgNum;
        return '\u001b[' + fgNum + 'm' + mess + '\u001b[39m';
    },

    red: (mess) => color.byNum(mess, 31),
    green: (mess) => color.byNum(mess, 32),
    yellow: (mess) => color.byNum(mess, 33),
    blue: (mess) => color.byNum(mess, 34),
    magenta: (mess) => color.byNum(mess, 35),
    cyan: (mess) => color.byNum(mess, 36),
    white: (mess) => color.byNum(mess, 37)

};

let text = 'hello world.'
console.log(color.red(text, 31));
console.log(color.green(text, 31));
console.log(color.yellow(text, 31));
console.log(color.blue(text, 31));
console.log(color.magenta(text, 31));
console.log(color.cyan(text, 31));
console.log(color.white(text, 31));
