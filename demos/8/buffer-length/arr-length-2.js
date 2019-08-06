let str = 'jalape\u00f1o';
console.log(str); // jalapeño

// array length is 8
console.log(str.length); 

// actual data size in bytes is 9
let buff = Buffer.from(str, 'utf8');
console.log(buff.length); // 9