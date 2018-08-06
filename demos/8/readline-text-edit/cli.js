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

openFile.open(dir);
