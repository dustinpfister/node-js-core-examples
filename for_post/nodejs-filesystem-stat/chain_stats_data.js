let fs = require('fs'),
path = require('path'),
cwd = process.cwd(),
promisify = require('util').promisify,
stat = promisify(fs.stat),
readFile = promisify(fs.readFile),
path_item = process.argv[2] || cwd;

// a get item info method
let getItemInfo = (path_item, encoding) => {
    // starting result object
    let result = {
        path_item: path.resolve(path_item),
        stats: null,
        data: null,
        isFile: false,
        encoding: encoding || ''
    };
    // start out by getting stats
    return stat(path_item)
    // then save stats, and if it is a file
    // read the file returning another promise
    .then((stats) => {
        result.stats = stats;
        result.isFile = stats.isFile();
        if (result.isFile) {
            return readFile(path_item);
        }
    })
    // if all goes well return a resolved
    // promise object with the result object
    .then((data) => {
        // if we have data from a readFile promise
        if (data) {
            // default to raw buffer
            result.data = data;
            // give a string if an encoding is given
            if (result.encoding) {
                result.data = result.data.toString(result.encoding);
            }
        }
        // return the result
        return Promise.resolve(result);
    })
    // if something goes wrong return
    // a rejected promise object
    .catch((e) => {
        return Promise.reject(e);
    });
};

// demo
getItemInfo(process.argv[2] || cwd)
.then((result) => {
    console.log(result)
})
.catch((e) => {
    console.log(e);
});
