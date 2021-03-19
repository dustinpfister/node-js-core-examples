
let buff = Buffer.from('afbfcf', 'hex');

let a = buff.slice(1, 3);

console.log(a.toString('hex')); // bfcf
// the source buffer is not changed
console.log(buff.toString('hex')); // afbfcf