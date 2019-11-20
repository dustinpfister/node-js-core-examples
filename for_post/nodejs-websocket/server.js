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

// set ports
port = process.argv[2] || 8090,
wsPort = 8095;

// The web server
let webServer = http.createServer(function (req, res) {
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
webServer.listen(port, function () {
    console.log('hosting client at: ');
    console.log('path: ' + dir_public);
    console.log('port: ' + port);
});

// using my simple web socket lib
let sws = require('./server_ws.js');
sws({
    port: 8095,
    host: 'localhost',
    onReady: function (api) {
        api.sendText('Yeah this works!');
        api.sendText('I can send text');
        api.socket.end();
    }
});


/*
wsServer resources
https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers
accept key example
https://github.com/theturtle32/WebSocket-Node/blob/master/lib/WebSocketRequest.js
 */