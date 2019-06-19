// just using the built in fs module
let fs = require('fs');
// export mkdirp with promise support,
// and old school style callbacks
module.exports = (dir, cb) => {
    cb = cb || () => {};
    return new Promise((resolve reject) => {
        if (dir === undefined) {
            let e = new Error('no dir given');
            cb(e)
            reject(e);
        } else {
            fs.mkdir(dir, {
                recursive: true
            }, (e) => {
                if (e) {
                    cb(e);
                    reject(e);
                } else {
                    cb(null);
                    resolve();
                }
            });
        }
    });
};
