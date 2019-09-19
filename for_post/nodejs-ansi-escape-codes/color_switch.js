let colorTextByNum = (mess, fgNum) => {
    mess = mess || '';
    fgNum = fgNum === undefined ? 31: fgNum;
    return '\u001b[' + fgNum + 'm' + mess + '\u001b[39m';
};

console.log( colorTextByNum('hello world', 31) );
