let buff = Buffer.alloc(4);

console.log(buff);
// <Buffer 00 00 00 00>

buff = Buffer.alloc(5,'hello','ascii');

console.log(buff);
// <Buffer 68 65 6c 6c 6f>
