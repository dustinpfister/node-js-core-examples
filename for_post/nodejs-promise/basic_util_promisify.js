let fs = require('fs'),
promisify = require('util').promisify;

let readFile = promisify(fs.readFile);

readFile('./README.md')
.then((data) => {
    // the content of the file if it is there
    // and all id well
    console.log(data.toString());
})
.catch((e) => {
    // error message if there is a problem
    console.log(e.message);
});
