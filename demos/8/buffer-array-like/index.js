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
