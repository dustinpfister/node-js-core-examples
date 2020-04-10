
let http = require('http'),

port = process.env.port || process.argv[2] || 8080;

let server = http.createServer();

server.on('request', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Hello Node.js World!');
    res.end();
});

server.listen(port, () => {

    console.log('web server is up on port: ' + port);

});
