let http = require('http'),
port = process.env.PORT || process.env[2] || 8080,
server = http.createServer();
// on request event
server.on('request', (req, res) => {
    res.end('hello world');
});
// on listening event
server.on('listening', () => {
    let address = server.address();
    console.log('server is up on http://localhost:' + address.port);
});
server.listen(port);
