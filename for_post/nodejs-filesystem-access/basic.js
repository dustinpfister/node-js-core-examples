let fs = require('fs');

fs.access('./basic.js', 0o777, function (e) {

    if (e) {
        console.log(e.message);
    } else {
        console.log('access is good');
    }

});
