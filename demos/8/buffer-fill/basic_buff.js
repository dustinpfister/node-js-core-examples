let buff = Buffer.allocUnsafe(4);
buff.fill(Buffer.from([255]));
console.log(buff.toString('hex'));
// ffffffff

