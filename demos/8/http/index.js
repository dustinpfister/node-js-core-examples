
let http = require('http');

let server = http.createServer();

server.on('request', function (req, res) {

    res.end('hello world');

});

server.listen(port);
