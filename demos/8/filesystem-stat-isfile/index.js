
let fs = require('fs'),
path = require('path'),
cwd = process.cwd(),
dir_used = process.argv[2] || cwd;

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

                let file = list[i];

                fs.stat(path.join(dir, file), function (e, stat) {

                    //console.log(file);
                    //console.log(stat.isFile());

                    if (e) {

                        reject(e.message);

                    }

                    if (stat.isFile()) {

                        files.push(file);

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

            //});

        });

    });

};

listFiles(dir_used).then(function (list) {

    console.log(list);

});

/*
fs.stat(path.join(cwd, 'README.md'), function (e, stats) {

if (e) {

console.log(e);

}

console.log(stats.isFile());

});
*/
