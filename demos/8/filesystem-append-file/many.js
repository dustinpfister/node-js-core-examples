var fs = require('fs'),
os = require('os');

var append = function (c) {
    var text = c + ';'; //c + os.EOL;
    fs.appendFile('./test.txt', text, function (e) {
        if (e) {
            console.log(e.message);
        }
    });
};

var i = 8200;
while (i--) {
    append(i);
}
