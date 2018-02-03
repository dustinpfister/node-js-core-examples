//let rw = require('./fs-rw'),
let path = require('path'),
fs = require('fs-extra'),
ejs = require('ejs');

/*
let mkApi = function (conf) {

conf = conf || {};

return {

cs: (function (conf) {

let dir = path.join(conf.dir_view, 'js', 'postit.js');

return fs.readFile(dir, 'utf-8').then(function (js) {

return '<script>' + js + '<\/script>';

}).catch (function (mess) {

return '<!-- error: ' + mess + ' -->';

});

}
(conf)),

say: function (what) {

what = what || '';

return '<p>' + what + '<\/p>'

}

}

};

let api = mkApi();

// remake the api, with the given conf
module.mkAPI = function (conf) {

api = mkApi(conf);

};
 */

module.exports = function (conf, req, res) {

    // default mime type to plain text, and encoding to utf-8
    conf.mime = 'text/plain';
    conf.encoding = 'utf-8';

    // set to binary encoding for supported image types
    conf.encoding = conf.ext === '.png' ? 'binary' : 'utf-8';
    conf.encoding = conf.ext === '.ico' ? 'binary' : 'utf-8';

    // set mime types for supported extensions
    conf.mime = conf.ext === '.css' ? 'text/css' : conf.mime;
    conf.mime = conf.ext === '.js' ? 'application/javascript' : conf.mime;

    // no extension? Then we will be rendering out html
    if (!conf.ext) {

        conf.mime = 'text/html';

    }

    // does the requested resource have an extension?
    if (conf.ext) {

        let dir = path.join(conf.dir_view, conf.url);

        fs.readFile(dir, conf.encoding).then(function (data) {

            res.end(data);

        }).catch (function (e) {

            res.end(e.message);

        });

    } else {

        // if no extension, render a path with the template
        let dir = path.join(conf.dir_view, 'template.ejs');

        ejs.renderFile(dir, {

            cs: function () {
                return '<script src="/js/postit.js"><\/script>'
            }

        }, function (e, html) {

            if (e) {

                res.end(e.message);

            } else {

                res.setHeader('Content-Type', conf.mime);
                res.end(html);

            }

        });

    }

    /*
    ejs.renderFile(path.join(conf.dir_view, 'template.ejs'), api, function (e, html) {

    console.log(e);
    console.log(html);

    res.end(html);

    });
     */

};
