let fs = require('fs');

let writeJSON = (dir_file, obj) => {
    return new Promise((resolve, reject) => {
        try {
            let json = JSON.stringify(obj);
            fs.writeFile(dir_file, json, (e) => {
                if (e) {
                    reject(e);
                } else {
                    resolve(json);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

writeJSON('./foo.json', {
    t: new Date(),
    n: 42
}).then((json) => {
    console.log('write good');
    console.log(json)
}).catch ((e) => {
    console.log(e.message);
});
