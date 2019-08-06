let buff = Buffer.alloc(4);

// default encoding is utf8
buff.write('ff');
// so if no encoding is given then the
// value of the buffer will be the
// Unicode value of the string 
console.log(buff.toString('hex'));
// 66660000