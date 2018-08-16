

let buffs = [
   Buffer.from('this '),
   Buffer.from('might '),
   Buffer.from('work')
];

let len = buffs.reduce(function(acc,buf){ return {length: acc.length + buf.length};}).length;

// this will of course work
let buff = Buffer.concat(buffs,len);
console.log(buff);
// <Buffer 74 68 69 73 20 6d 69 67 68 74 20 77 6f 72 6b>


// I can just give the buffers as well
// this still figures out the length though
// so if it is know, the value should be passed
buff = Buffer.concat(buffs);
console.log(buff);
// <Buffer 74 68 69 73 20 6d 69 67 68 74 20 77 6f 72 6b>

// This will of course just result in the first six bytes
buff = Buffer.concat(buffs, 6);
console.log(buff);
// <Buffer 74 68 69 73 20 6d>
