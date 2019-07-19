// array of numbers
let arr = ['0a','0b','0c'];

let buff = Buffer.from(arr.join(''),'hex');
console.log(buff.length); // 3 bytes
buff.forEach((byt) => {
    console.log(byt);
});
// 10 11 12
