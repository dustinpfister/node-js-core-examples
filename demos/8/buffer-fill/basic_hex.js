let buff = Buffer.allocUnsafe(4);
buff.fill('0a', 'hex');
console.log(buff.reduce((acc, byt) => {
        return acc + ',' + byt
    }));
// 10,10,10,10
