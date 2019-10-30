
console.log( Buffer.isBuffer(Buffer.alloc(4)) ); // true

// some other possible values
console.log( Buffer.isBuffer(4) ); // false
console.log( Buffer.isBuffer('foo') ); // false
console.log( Buffer.isBuffer(0) ); // false
console.log( Buffer.isBuffer('') ); // false
console.log( Buffer.isBuffer(undefined) ); // false
console.log( Buffer.isBuffer(null) ); // false
console.log( Buffer.isBuffer(NaN) ); // false
console.log( Buffer.isBuffer([]) ); // false
console.log( Buffer.isBuffer({}) ); // false
console.log( Buffer.isBuffer( new Uint8Array()) ); // false

// looks good
// in fact even if I do something like this is still works
let buff = Buffer.alloc(5);
let obj = {};
obj.constructor = buff.constructor;
console.log(obj.constructor.name); // 'Buffer'
console.log( Buffer.isBuffer(obj) ); // false