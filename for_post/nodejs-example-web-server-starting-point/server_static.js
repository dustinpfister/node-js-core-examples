let http = require('http'),
path = require('path'),
fs = require('fs'),
promisify = require('util').promisify,
readFile = promisify(fs.readFile),

port = process.env.port || process.argv[2] || 8080,
dir_publicHTML = path.resolve(__dirname, 'public');

let server = http.createServer();

server.on('request', function (req, res) {

    let encoding = 'binary',
    resource = path.join(dir_publicHTML, req.url),
    resource_ext = path.extname(resource);

    // if no file extension append 'index.html'
    resource = !resource_ext ? path.join(resource, 'index.html') : resource;
    resource_ext = !resource_ext ? '.html' : resource_ext;

    if (resource_ext === '.html') {
        encoding = 'utf8';
    }

    console.log('');
    console.log('req.method: ', req.method); // the type of request (GET, POST, HEAD, ect)
    console.log('req.url: ', req.url); // the path to the resource
    console.log('resource: ', resource); // the resource in the public folder
    console.log('encdoing: ', encoding); // encoding

    readFile(resource, encoding)

    .then((fileData) => {

        res.writeHead(200, {
            'Content-Type': 'text/html'
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
