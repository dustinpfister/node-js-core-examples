let http = require('http'),
path = require('path'),
fs = require('fs'),
server = http.createServer(),
// port, host, public dir
port = 8080,
host = 'localhost',
dir_public = process.argv[0] || process.cwd();

// on request
server.on('request', (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        let uri_index = path.join(__dirname, 'index.html');
        let reader = fs.createReadStream(uri_index, {
                highWaterMark: 128
            });
        res.setHeader('Content-Type', 'text/html');
        reader.on('data', (data) => {
            console.log('sent chunk: ')
            res.write(data);
        });
        reader.on('error', (e) => {
            console.log(e.message)
            res.write(e.message);
            res.end();
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
