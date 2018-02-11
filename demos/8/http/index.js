
let http = require('http');

let server = http.createServer();

let port = process.env.PORT || process.env[2] || 8080;

server.on('request', function (req, res) {

    res.end('hello world');

});

server.listen(port);
