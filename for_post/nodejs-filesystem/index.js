let fs = require('fs'),
path = require('path'),
cwd = process.cwd();

// read file method
let readFile = function (dir) {

    // returns a promise
    return new Promise(function (resolve, reject) {

        // read a file
        fs.readFile(dir, 'utf-8', function (e, data) {

            if (e) {

                // reject if error
                reject(e);

            }

            // else resolve with the data
            resolve(data);

        });

    });

};

// read a file Promise style
readFile(path.join(cwd, 'README.md')).then(function (data) {

    console.log(data);

}).catch (function (e) {

    console.log(e);

});
