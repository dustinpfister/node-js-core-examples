# readline-text-edit

A simple command line interface text editor that makes use of the node.js file system, and readline modules.


## open-file.js and the edit api.

The open file module provides an api, that can the be used from the command line thanks to the readline module. The main method of interest in open-file.js is the editAPI method that resolves with the api when called from my cli.js file that is called from the command line.

```js
// open a file for reading and writing
exports.editAPI = (filePath) => {
 
    let openFile = this;
 
    return new Promise((resolve, reject) => {
 
        openFile.ensureFile(filePath).then((fd) => {
 
            // resolve with an api
            resolve({
                fd: fd,
                filePos: 0,
                fileBuffSize: 64,
                fileBuff: Buffer.alloc(64),
 
                // set the file buffer position, and size
                setFileBuff: function (pos, size) {
 
                    this.filePos = pos || 0;
                    this.size = size || 64;
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
```

