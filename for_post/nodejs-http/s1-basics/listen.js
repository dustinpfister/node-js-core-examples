let http = require('http'),
server = http.createServer(),
port = process.env.PORT || process.env[2] || 8080;
server.on('request', function (req, res) {
    res.end('hello world');
});

server.listen(port);
