let buff = Buffer.from('afbfcf', 'hex');

// the write method can be used to write in place
// just like array splice
var start = 1,
count = 1;
buff.write('001a', start, count, 'hex');
console.log(buff.toString('hex')); // af00cf