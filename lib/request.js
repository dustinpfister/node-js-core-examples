
let qs = require('querystring'),
path = require('path');

// supported http methods
let methods = {

    GET: function (conf, req, res) {

        require(path.join(conf.dir_lib, 'request-get'))(conf, req, res);

    },

    POST: function (conf, req, res) {

        require(path.join(conf.dir_lib, 'request-post'))(conf, req, res);

    }

};

module.exports = function (conf, req, res) {

    conf.url = req.url;
    conf.params = qs.parse(req.url.split('?')[1] || '');
    conf.method = req.method;
    conf.payload = {};
    conf.ext = path.extname(req.url.split('?')[0]).toLowerCase();
    conf.encoding = 'utf-8';
    conf.mime = 'text/plain';

    if (conf.method in methods) {

        methods[conf.method](conf, req, res);

    } else {

        res.end(JSON.stringify(conf));

    }

    /*
    if (conf.method === 'GET') {



    } else {

    res.end(JSON.stringify(conf));

    }
     */

};
