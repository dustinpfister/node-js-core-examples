const http = require('http');

const server = http.createServer((req, res) => {
        res.end('hello world');
    });
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8080, 'localhost', 200, () => {
    let add = server.address();
    console.log('static server up on http://' + add.address + ':' +add.port);
});
