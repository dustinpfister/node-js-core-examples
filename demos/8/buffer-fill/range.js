let buff = Buffer.allocUnsafe(16);
buff.fill('00', 'hex');
buff.fill('ff', 4, 12, 'hex');
console.log(buff.toString('hex'));
// 00000000ffffffffffffffff00000000
