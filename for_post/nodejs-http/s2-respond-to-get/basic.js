let http = require('http'),
fs = require('fs');
 
let server = http.createServer();
 
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
 
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
 
server.listen(8080, 'localhost', 200, () => {
    let add = server.address();
    console.log('static server up on http://' + add.address + ':' + add.port);
});