
let qs = require('querystring'),
path = require('path');

module.exports = function (conf, req, res) {

    conf.url = req.url;
    conf.params = qs.parse(req.url.split('?')[1] || '');
    conf.method = req.method;
    conf.payload = {};

    if (conf.method === 'GET') {

        require(path.join(conf.dir_lib, 'request-get'))(conf, req, res);

    } else {

        res.end(JSON.stringify(conf));

    }

};
