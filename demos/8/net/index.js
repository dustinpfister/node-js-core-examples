let net = require('net');
let server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});

// listen on port 8080 on local host with a backlog of 200
server.listen(8080, 'localhost', 200, () => {
  console.log('opened server on', server.address());
});