let http = require('http'),
server = http.createServer(),
port = process.env.PORT || process.env[2] || 8080;
 
server.on('request', function (req, res) {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', function (chunk) {
            body += chunk.toString();
            // do some basic sanitation
            if (body.length >= 200) {
                // if body char length is greater than
                // or equal to 200 destroy the connection
                res.connection.destroy();
            }
        });
        // once the body is received
        req.on('end', function () {
            if (body) {
                res.end('okay thank you for: ' + body);
            } else {
                res.end('thanks for the post request, but it would be nice if it had something');
            }
        });
    } else {
        res.end('not a post');
    }
});
 
server.listen(port);