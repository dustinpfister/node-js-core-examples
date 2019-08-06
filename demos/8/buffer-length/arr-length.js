let str = 'jalape\u00f1o';
console.log(str); // jalapeño

// array length is 8
console.log(str.length); 

// actual data size in bytes is 9
let buff2 = Buffer.from(str, 'utf8');
console.log(buff2.length); // 9