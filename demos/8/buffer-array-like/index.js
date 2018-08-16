let buff = Buffer.from('ABCD');

Array.prototype.forEach.call(buff, function (currentByte) {

    console.log(currentByte);

});

/*
65
66
67
68
*/

buff = Buffer.alloc(4);

buff[1] = 0x65;

console.log(buff); // <Buffer 00 65 00 00>
