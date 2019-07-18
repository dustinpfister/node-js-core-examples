let net = require('net');

let server = net.createServer();

// 'connection' listener
server.on('connection', (socket) => {
    console.log('connected');
    socket.on('end', () => {
        console.log('disconnected');
    });
    socket.write('hello\r\n');
    socket.end()
});

// handle errors
server.on('error', (err) => {
  throw err;
});

// listen on port 8080 on local host with a backlog of 200
server.listen(8080, 'localhost', 200, () => {
    console.log('opened server on', server.address());
});
