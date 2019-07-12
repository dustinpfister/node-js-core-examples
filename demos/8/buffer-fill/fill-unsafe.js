let buff = Buffer.allocUnsafe(8);
buff.fill(Buffer.from('ff','hex'))
console.log(buff.toString('hex'));
// ffffffffffffffff