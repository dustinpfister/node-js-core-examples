let http = require('http');
let server = http.createServer();
server.listen(0, () => {
    let address = server.address();
    console.log('listening on random port: ' + address.port);
});
