let readline = require('readline'),
path = require('path'),
fs = require('fs'),

openFile = require('./open-file'),

// fine path to file
dir = 'temp.txt';
if (process.argv[2]) {
    dir = process.argv[2]
}
dir = path.resolve(dir);

// open the edit API
openFile.editAPI(dir).then((api) => {

    api.setFileBuff(0,4);
    api.read().then((buff) => {

        console.log(buff.toString());

        api.setFileBuff(12,8);
        api.read().then((buff) => {

            console.log(buff.toString());

        })

    });

}).catch ((err) => {

    console.log('error with edit api');
    console.log(err);

})
