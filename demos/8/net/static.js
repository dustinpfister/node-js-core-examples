let http = require('http');

let server = http.createServer();

// on request
server.on('request', (req, res) => {
    console.log(req.url);
    if(req.url === '/') {
        res.end('root');
    }
    else {
        res.end();
    }
});

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8080, 'localhost', 200, () => {
    let add = server.address();
    console.log('static server up on http://' + add.address + ':' + add.port);
});
