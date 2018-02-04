
module.exports = function (conf, req, res) {

    conf.payload = '';
    req.on('data', function (chunk) {

        conf.payload += chunk.toString();

        // terminate the connection if it gets to long
        if (conf.payload.length >= Math.pow(10, 5)) {

            req.connection.destroy();

        }

    });

    req.on('end', function () {

        res.end(JSON.stringify({
                mess: 'foo',
                payload: conf.payload
            }));

    });

};
