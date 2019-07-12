let buff = Buffer.allocUnsafe(8);

buff.fill('f1', 'hex');

console.log(buff.toString('hex'));
// f1f1f1f1f1f1f1f1

buff.fill('00','hex');
console.log(buff.toString('hex'));
// 0000000000000000

buff.write('f1a8', 1, 2, 'hex');
console.log(buff.toString('hex'));
// 00f1a80000000000