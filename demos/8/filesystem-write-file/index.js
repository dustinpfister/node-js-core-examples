let fs = require('fs'),
path = require('path'),
cwd = process.cwd(),

text = process.argv[2] || 'hello world',
dir = path.join(cwd, 'test.txt');

fs.writeFile(dir, text, 'utf-8', (e)=> {
    if (e) {
        console.log(e);
    }
});
