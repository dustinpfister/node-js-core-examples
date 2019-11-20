/*
 *  server.js
 *
 *   This just provides a simple static server for the project.
 *
 */

let http = require('http'),
fs = require('fs'),
path = require('path'),

// the dir_public pubic folder
dir_root = path.resolve(__dirname),
dir_public = path.join(__dirname, 'public'),

// set port with first argument, or 8888
port = process.argv[2] || 8888; // port 8888 for now

// create and start the server
let server = http.createServer(function (req, res) {
        // get the path
        let p = path.join(dir_public, req.url);
        // get stats of that path
        fs.lstat(p, function (e, stat) {
            // if error end
            if (e) {
                res.writeHead(500);
                res.write(JSON.stringify(e));
                res.end();
            }
            // if stats check it out
            if (stat) {
                // if it is not a file append index.html to path, and try that
                if (!stat.isFile()) {
                    p = path.join(p, 'index.html');
                }
                // default encoding to utf-8, and get file extension
                let encoding = 'utf-8';
                let ext = path.extname(p).toLowerCase();
                // binary encoding if...
                encoding = ext === '.png' ? 'binary' : encoding;
                // try to read the path
                fs.readFile(p, encoding, function (e, file) {
                    // if error end
                    if (e) {
                        res.writeHead(500);
                        res.write(JSON.stringify(e));
                        res.end();
                    }
                    // if file, send it out
                    if (file) {
                        // default mime to text/plain
                        let mime = 'text/plain';
                        // text
                        mime = ext === '.html' ? 'text/html' : mime;
                        mime = ext === '.css' ? 'text/css' : mime;
                        mime = ext === '.js' ? 'text/javascript' : mime;
                        // images
                        mime = ext === '.png' ? 'image/png' : mime;
                        res.writeHead(200, {
                            'Content-Type': mime
                        });
                        res.write(file, encoding);
                        res.end();
                    }
                });
            }
        });
    });

// start server
server.listen(port, function () {
    console.log('hosting client at: ');
    console.log('path: ' + dir_public);
    console.log('port: ' + port);
});
