
//let dp = [0xe2, 0x82, 0xaf];

// text containing Drachma sign
let text = '\u20af';

// ascii encoding
let ascii = Buffer.from(text,'ascii');

// utf-8 encoding
let utf8 = Buffer.from(text,'utf-8');

console.log(ascii);
// <Buffer af>

console.log(utf8);
// <Buffer e2 82 af>