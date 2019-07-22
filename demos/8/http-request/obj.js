let http = require('http');
let req = http.request({
        hostname: 'www.google.com',
        port: 80,
        path: '/',
        method: 'GET'
    }, (res) => {
        let html = '';
        res.on('data', function (chunk) {
            html += chunk.toString('ascii');
        });
        res.on('end', () => {
            console.log(html);
        });
    });
req.end();
