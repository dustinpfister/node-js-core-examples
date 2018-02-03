let fs = require('fs');

// read files promise style
exports.read = function (dir, encoding) {

    // default to utf-8 encoding
    encoding = encoding || 'utf-8';

    // return a promise
    return new Promise(function (resolve, reject) {

        // reject if a dir is not given
        if (!dir) {

            reject('no dir given when trying to read a file');

        }

        // read the dir
        fs.readFile(dir, encoding, function (e, data) {

            // if error reject with the message
            if (e) {

                reject(e.message);

            }

            // resolve with the data
            resolve(data);

        });

    });

};