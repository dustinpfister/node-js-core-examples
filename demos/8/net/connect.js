let net = require('net'),
host = process.argv[2] || 'localhost',
port = process.argv[3] || 8080;

let socket = new net.Socket();

// for incoming data
socket.on('data', (a) => {
    console.log(a.toString());
});

socket.on('error', (err) => {
    console.log('error connectng to Server on host: ' + host + ' port: ' + port);
    console.log(err);
});

socket.connect(port, host);
