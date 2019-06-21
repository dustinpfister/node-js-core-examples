var fs = require('fs');
var append = function (c) {
    var text = c + ';'; //c + os.EOL;
    fs.appendFile('./test.txt', text, function (e) {
        if (e) {
            console.log(e.message);
        }
    });
};

// This will result in an EMFILE error
var i = 8200;
while (i--) {
    append(i);
}
