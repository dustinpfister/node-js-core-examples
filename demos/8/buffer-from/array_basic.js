// array of numbers
let arr = [1, 2, 3, 4, 255, 254, 253];

let buff = Buffer.from(arr);
console.log(buff.length); // 4 bytes
buff.forEach((byt) => {
    console.log(byt);
});
// 1 2 3 4 255 254 253
