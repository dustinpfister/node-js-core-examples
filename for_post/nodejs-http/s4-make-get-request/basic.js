let http = require('http');
 
let req = http.request(
    {
        hostname: 'www.google.com'
    }, 
    function (res) {
        res.on('data', function (chunk) {
            // log each chunk as 'ascii' encoded string
            console.log(chunk.toString('ascii'));
        });
    }
);
req.end();