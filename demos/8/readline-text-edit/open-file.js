// modules
let fs = require('fs'),
path = require('path');
//Buffer = require('buffer');

// module vars
let fileBuff = Buffer.alloc(64);

//console.log(Buffer.alloc);


// ensure the given absolute path to a file
// is there. This will open a file for reading/appending, and
// create the file if it is not there using fs.open
// if all goes well it will resolve with an fd that can
// be used to read and write to the file
exports.ensureFile = (filePath) => {

    return new Promise((resolve, reject) => {

        // a+ is the append/read flag
        fs.open(filePath, 'a+', (err, fd) => {

            if (err) {

                reject(err);

            } else {

                resolve(fd);

            }

        })

    })

};

// open a file for reading and writing
exports.open = (filePath) => {

    this.ensureFile(filePath).then((fd) => {

        fs.read(fd, fileBuff, 0, fileBuff.length, 0, function (err, bytesRead, buff) {

            console.log(err);
            console.log(buff.toString());

        });

    }).catch ((err) => {

        console.log(err);

    });

}
