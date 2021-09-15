// require in the http module
let http = require('http'),
// need a port number
port = process.env.PORT || process.env[2] || 8080,
// create a server
server = http.createServer((req, res) => {
        res.end('hello world');
    });
// listen on the port
server.listen(port, () => {
    console.log('server is up on http://localhost:' + port);
});
