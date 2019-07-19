// from ascii string
let buff = Buffer.from('a', 'ascii');

// as expected this results in a 
// one byte sized buffer
console.log(buff.length); // 1

// The value of the byte
// is 97 as expected
console.log(buff[0]); // 97