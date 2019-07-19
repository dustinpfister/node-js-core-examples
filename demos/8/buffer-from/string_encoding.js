// a string with char 80 in hex
// or 128 in decimal
const str = '\u0080';

// the default encoding is utf8
// so this will result in two bytes
let buff = Buffer.from(str);
console.log(buff.length); // two bytes

// it is still one byte if ascii encoding
// is used
buff = Buffer.from(str, 'ascii');
console.log(buff.length); // one byte
