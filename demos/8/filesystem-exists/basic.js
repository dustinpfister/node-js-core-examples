
var fs = require('fs');

fs.exists('./test.txt', function (fileExist) {
    console.log(fileExist);
    // true or false depending if test.txt is there
});
