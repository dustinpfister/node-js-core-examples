let fs = require('fs');

let readFile = (filePath, encoding, flag) => {
    encoding = encoding || 'utf8';
    flag = flag || 'r';
    if (!filePath) {
        return Promise.reject(new Error('file path not given to readFile method.'))
    }
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, {
            encoding: encoding,
            flag: flag
        }, function (e, data) {
            if (e) {
                reject(e);
            } else {
                resolve(data);
            }
        });
    });
};

readFile('./README.md')
.then((data) => {

    console.log(data.toString());

})
.catch((e) => {

    console.log(e.message);

});
