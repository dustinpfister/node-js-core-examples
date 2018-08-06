// modules
let fs = require('fs'),
path = require('path');
//Buffer = require('buffer');

// module vars
//let fileBuff = Buffer.alloc(64);

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

let read = function () {};

// open a file for reading and writing
exports.editAPI = (filePath) => {

    let openFile = this;

    return new Promise((resolve, reject) => {

        openFile.ensureFile(filePath).then((fd) => {

            // resolve with an api
            resolve({
                fd: fd,
                filePos: 0,
                fileBuffSize: 256,
                fileBuff: Buffer.alloc(256),

                // set the file buffer position, and size
                setFileBuff: function (pos, size) {

                    this.filePos = pos || 0;
                    this.size = size || 256;
                    this.fileBuff = Buffer.alloc(this.size);

                },

                // read with the current buffer settings
                read: function () {

                    return new Promise((resolve, reject) => {

                        fs.read(this.fd, this.fileBuff, 0, this.fileBuff.length, this.filePos, function (err, bytesRead, buff) {

                            if (err) {

                                reject(err);

                            } else {

                                resolve(buff);

                            }

                        });

                    });

                }

            });

        }).catch ((err) => {

            reject(err);

        });

    })

}
