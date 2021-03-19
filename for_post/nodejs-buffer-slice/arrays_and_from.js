// have a bytes array
let bytes = ['ff', 'af', '00', 'cf'];

// do whatever I want with array methods
bytes.splice(1, 0, '00');
bytes.splice(0, 0, '00');

// create a hex string
let hexString = bytes.join('')

// create a buffer from the hex string using Array.from
let buff = Buffer.from(hexString, 'hex');
console.log(buff.length); // 6

// The toString method of a buffer is then how to create
// a hex string from a buffer
console.log(buff.toString('hex')); // 00ff00af00cf