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

let putUserCount = (obj) => {
    let path_count = path.join(dir_home, '.count.json');
    return writeFile(path_count, JSON.stringify(obj));
};

getUserCount()
.then((obj) => {
    console.log(obj.count);
    obj.count += 1;
    return putUserCount(obj);
});
