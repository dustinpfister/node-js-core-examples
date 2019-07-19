
let hex = '010203fffefd';

let buff = Buffer.from(hex, 'hex');

console.log(buff.length); // 6 bytes

buff.forEach((byt) => {
    console.log(byt);
});
// 1 2 3 255 254 253
