let http = require('http'),
path = require('path'),

port = process.env.port || process.argv[2] || 8080;

let server = http.createServer();

server.on('request', function (req, res) {

    let dir_pathmod = path.join(__dirname, 'paths', req.url, 'index.js');

    try {
        let pathMod = require(dir_pathmod);
        pathMod(req, res);
    } catch (e) {
        res.writeHead(501, {
            'Content-Type': 'text/plain'
        });
        res.write('501: ' + e.message);
        res.end();
    }

});

server.listen(port, () => {
    console.log('web server is up on port: ' + port);
});
