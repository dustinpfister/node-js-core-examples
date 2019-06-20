var fs = require('fs');
var writer = fs.createWriteStream('./test.txt');
var append = function (c) {
    writer.write(c + ';');
};
// This will work
var i = 10000;
while (i--) {
    append(i);
}
