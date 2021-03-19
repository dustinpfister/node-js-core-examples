
let buff = Buffer.from('afbfcf', 'hex');

let a = buff.slice(1, 3);

console.log(a.toString('hex')); // bfcf