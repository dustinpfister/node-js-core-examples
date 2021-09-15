let http = require('http'),
server = http.createServer(),
port = 8080,
host = 'localhost';
// on request
server.on('request', (req, res) => {
    if (req.url === '/') {
        console.log('request for root path');
        res.write('<a href="/foo">foo path</a><br><a href="/bar">bar path</a><br>');
        res.end();
    } else {
        res.write('this is non-root path ' + req.url);
        res.end();
    }
});
// on listening
server.on('listening', () => {
    let add = server.address();
    console.log('static server up on http://' + add.address + ':' + add.port);
}); ;
// listen
server.listen(port, host);
