let buff = Buffer.alloc(4);

// just the starting byte index can be given
buff.write('ffff', 1, 'hex');
console.log(buff.toString('hex'));
// 00ffff00

// a start index and length can also be given
buff.fill('00', 'hex');
buff.write('ffff', 1, 1, 'hex');
console.log(buff.toString('hex'));
// 00ff0000
