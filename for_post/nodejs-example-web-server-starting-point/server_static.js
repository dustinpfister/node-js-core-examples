let http = require('http'),
path = require('path'),
fs = require('fs'),
promisify = require('util').promisify,
readFile = promisify(fs.readFile),

port = process.env.port || process.argv[2] || 8080,
dir_publicHTML = path.resolve(__dirname, 'public');

let server = http.createServer();

server.on('request', function (req, res) {

    console.log(req.method); // the type of request (GET, POST, HEAD, ect)
    console.log(req.url); // the path to the resource

    let encoding = 'utf8';
    readFile(path.join(dir_publicHTML, req.url), encoding)

    .then((fileData) => {

        
        res.writeHead(200, {
        'Content-Type': 'text/plain'
        });
        res.write(fileData);
        res.end();
        

    })

    .catch((e) => {

        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });
        res.write('501 server error: ' + e.message);
        res.end();

    })

});

server.listen(port, () => {

    console.log('web server is up on port: ' + port);

});
