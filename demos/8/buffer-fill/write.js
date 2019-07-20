let buff = Buffer.allocUnsafe(4);

buff.write('f1a20306', 0, 8, 'hex');
console.log(buff.toString('hex'));
// f1a20306