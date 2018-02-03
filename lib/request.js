
let qs = require('querystring'),
path = require('path');

module.exports = function (conf, req, res) {

    conf.url = req.url;
    conf.params = qs.parse(req.url.split('?')[1] || '');
    conf.method = req.method;
    conf.payload = {};
    conf.ext = path.extname(req.url.split('?')[0]).toLowerCase();
    conf.encoding = 'utf-8';

    conf.encoding = conf.ext === '.png' ? 'binary' : 'utf-8';
    conf.encoding = conf.ext === '.ico' ? 'binary' : 'utf-8';

    if (conf.method === 'GET') {

        require(path.join(conf.dir_lib, 'request-get'))(conf, req, res);

    } else {

        res.end(JSON.stringify(conf));

    }

};
