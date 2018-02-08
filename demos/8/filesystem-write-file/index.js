
let fs = require('fs'),
path = require('path'),
cwd = process.cwd(),

text = process.argv[2] || 'hello world',

fs.readFile(path.join(cwd, 'test.txt'), text, 'utf-8', function (e, data) {

    if (e) {

        console.log(e);

    }

    console.log(data);

});
