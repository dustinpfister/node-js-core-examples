let http = require('http');

let server = http.createServer();

// what to do on listening event
server.on('listening', () => {
    let address = server.address();
    console.log('listening on random port: ' + address.port);
});

server.listen(0);
