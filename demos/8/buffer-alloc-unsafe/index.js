let oldData = Buffer.allocUnsafe(256);

console.log(oldData);
// <Buffer 08 00 00 00 07 00 00 00 70 6c dc 90 
// b1 02 00 00 00 00 00 00 00 00 00 00 00 00 00 
// 00 00 00 00 00 00 00 00 00 08 00 00 00 30 f0 
// b7 bd f7 7f 00 00 01 00 ... >

let safeBuff = Buffer.alloc(256);

console.log(safeBuff);
// <Buffer 00 00 00 00 00 00 00 00 00 00 00 
// 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
// 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
// 00 00 00 00 00 00 00 00 00 ... >
