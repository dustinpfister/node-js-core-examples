let fs = require('fs');

fs.unlink(filePath, (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log('delete ' + filePath);
    }
});
