
let buff = Buffer.concat([Buffer.from('afaf','hex'),Buffer.from('2828','hex')], 3);
console.log(buff.toString('hex'));
// afaf28
