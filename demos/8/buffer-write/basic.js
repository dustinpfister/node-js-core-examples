let buff = Buffer.alloc(4);

// make first byte of buffer ff
// with the buffer write method
buff.write('ff', 'hex');

console.log(buff.toString('hex'));
// ff000000