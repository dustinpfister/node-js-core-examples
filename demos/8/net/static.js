let http = require('http'),
fs = require('fs');

let server = http.createServer();

// on request
server.on('request', (req, res) => {
    if (req.url === '/') {
        let reader = fs.createReadStream('index.js', {
                highWaterMark: 16
            });

        reader.on('readable', () => {

            //while (chunk = reader.read() != null) {
            //console.log(chunk);
            //console.log(reader.read());
            res.write(reader.read());

            res.end();

        })

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
