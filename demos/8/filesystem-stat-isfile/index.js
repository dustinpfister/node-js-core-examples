
let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,
dir_root = process.argv[2] || process.cwd();

// promisify fs.readdir and fs.stat
let readdir = promisify(fs.readdir),
stat = promisify(fs.stat),
// is file method that returns an object for the file
// of false for a dir
isFile = (filePath) => {
    return stat(filePath)
    .then((stat) => {
        if (stat.isFile()) {
            return {
                filePath: filePath,
                stat: stat
            }
        }
        return false;
    });
}

readdir(dir_root)
.then((files) => {
    return Promise.all(files.map((file) => {
            return isFile(path.join(dir_root, file));
        }));
})
.then((result) => {
    result = result.filter((item) => {
            return item;
        });
    console.log(result);
})
.catch((e) => {
    console.log(e.message);
})

/*

let getDirList = function (dir) {
dir = dir || cwd;
return new Promise(function (resolve, reject) {
// read the contents of the dir
fs.readdir(dir, function (e, list) {
if (e) {
reject(e.message);
}
resolve(list);
});
});
};

// list only files
let listFiles = function (dir) {
let i = 0,
len = 0,
files = [];
dir = dir || dir_used;
return new Promise(function (resolve, reject) {
getDirList(dir).then(function (list) {
let i = 0,
len = list.length,
next = function () {
let file = list[i],
filePath = path.join(dir, file);
fs.stat(filePath, function (e, stat) {
if (e) {
reject(e.message);
}
if (stat.isFile()) {
files.push({
path: filePath,
fileName: file,
stat: stat
});
}
i += 1;
if (i >= len) {
resolve(files);
} else {
next();
}
});
};
next();
});
});
};

listFiles(dir_used).then(function (list) {
console.log(list);
});

*/
