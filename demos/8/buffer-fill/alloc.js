let buff = Buffer.alloc(4, '0a', 'hex');
console.log(buff.reduce((acc, byt) => {
        return acc + ',' + byt
    }));
