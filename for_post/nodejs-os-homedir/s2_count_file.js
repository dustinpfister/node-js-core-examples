let os = require('os'),
path = require('path'),
fs = require('fs'),
promisify = require('util').promisify,
readFile = promisify(fs.readFile),
writeFile = promisify(fs.writeFile),
dir_home = os.homedir();

// get user count file
let getUserCount = () => {
    let path_count = path.join(dir_home, '.count.json');
    return readFile(path_count)
    .then((data) => {
        try {
            return JSON.parse(data);
        } catch (e) {
            return {
                count: 0
            }
        }
    })
    .catch((e) => {
        return {
            count: 0
        }
    });
};

getUserCount()
.then((obj) => {

    console.log(obj.count);

})
