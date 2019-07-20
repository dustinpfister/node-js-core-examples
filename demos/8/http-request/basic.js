let http = require('http');
let req = http.request('http://www.google.com', (res) => {
        let html = '';
        res.on('data', function (chunk) {
            html += chunk.toString('ascii');
        });
        res.on('end', () => {
            console.log(html);
        })
    });
req.end();
