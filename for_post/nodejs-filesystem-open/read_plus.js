let fs = require('fs'),
promisify = require('util').promisify,
path = require('path'),

open = promisify(fs.open),
close = promisify(fs.close),
write = promisify(fs.write);

let writeRecordAt = function (opt) {
    opt = opt || {};
    opt.dbPath = opt.dbPath || path.resolve('./db.txt');
    opt.recNum = opt.recNum || 0;
    opt.recSize = opt.recSize || 8;
    opt.rec = opt.rec || Buffer.alloc(opt.recSize, 'ff', 'hex');

    // use r+ actually even though we are just writing
    // because w and w+ do not work as expected.
    return open(opt.dbPath, 'r+', 0o666)
    // file not there?
    .catch((e) => {
        // only use w+ if the file is not there
        // as that will work okay for writing the first record
        // at least
        if (e.code === "ENOENT") {
            return open(opt.dbPath, 'w+', 0o666)
        }
        // reject if other error
        return Promise.reject(e);
    })
    // write the record
    .then((fd) => {
        return write(fd, opt.rec, 0, opt.recSize, opt.recSize * opt.recNum);
    });
};

writeRecordAt({
    dbPath: './db.rplus.txt',
    recNum: 2,
    recSize: 8,
    rec: Buffer.from('ccccccc\n', 'utf8')
})
.then(() => {

    console.log('write done');

})
