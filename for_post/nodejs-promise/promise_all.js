let fs = require('fs'),
promisify = require('util').promisify;

let mkdir = promisify(fs.mkdir);

let mkMapsFolder = () => {

    // attempt to make a new maps folder
    return mkdir('./maps')
    // if successful just resolve
    .then(() => {
        return promise.resolve();
    })
    // folder is there or other error
    .catch((e) => {
        // if it is just there all ready resolve
        if (e.code === 'EEXIST') {
            return Promise.resolve();
        } else {
            // else reject because of other error
            return Promise.reject(e);
        }
    });
};

mkMapsFolder()
.then(() => {
    console.log('all is good with maps folder, creating maps.');
})
.catch((e) => {
    console.log(e.message);
});
