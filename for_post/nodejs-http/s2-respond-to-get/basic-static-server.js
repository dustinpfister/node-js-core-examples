let http = require('http'),
fs = require('fs'),
server = http.createServer(),
port = 8080,
host = 'localhost'
// on request
server.on('request', (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        let reader = fs.createReadStream('./public/index.html', {
                highWaterMark: 128
            });
        res.setHeader('Content-Type', 'text/html');
        reader.on('data', (data) => {
            console.log('sent chunk: ')
            res.write(data);
        });
        reader.on('end', () => {
            console.log('done');
            res.end();
        });
    } else {
        res.end();
    }
});
// on listening
server.on('listening', () => {
    let add = server.address();
    console.log('static server up on http://' + add.address + ':' + add.port);
});
// on client error
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
// listen
server.listen(port, host, 200);