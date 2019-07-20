let patt = Buffer.alloc(4, 'ff', 'hex'),
buff = Buffer.allocUnsafe(4);
patt.copy(buff, 0, 0, buff.length);
console.log(buff.toString('hex'));
// ffffffff
