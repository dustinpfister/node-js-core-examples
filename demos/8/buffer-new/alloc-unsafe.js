let buff = Buffer.allocUnsafe(512);
let safe  = buff.every((b) => b === 0);
console.log(safe); // false
