let fs = require('fs');

fs.readFile('./README.md', 'utf8', function (e, data) {
    if (e) {
        // error message if there is a problem
        console.log(e.message);
    } else {
        // the content of the file if it is there
        // and all id well
        console.log(data.toString());
    }
});
