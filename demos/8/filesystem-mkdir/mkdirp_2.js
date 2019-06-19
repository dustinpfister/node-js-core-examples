
var fs = require('fs'),
path = require('path');

// mkdirp
var mkdirp = function (p, cb) {
    p = path.resolve(p);
    fs.mkdir(p, function (e) {
        if (!e) {
            cb(null);
        } else {
            if (e.code === 'ENOENT') {
                // if 'ENOENT' code error call mkdirp
                // again with the dirname of current dir
                mkdirp(path.dirname(p), function (e) {
                    if (e) {
                        cb(e);
                    } else {
                        mkdirp(p, cb);
                    }
                });
            } else {
                // else some other error happed
                cb(e);
            }
        }
    });
};

mkdirp('./test/foo/bar', function (e) {
    if (!e) {
        fs.writeFile('./test/foo/bar/baz.txt', 'okay', function () {
            console.log('wrote a file')
        });
    } else {
        console.log(e.message);
    }
});
