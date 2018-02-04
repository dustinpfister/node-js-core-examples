//let rw = require('./fs-rw'),
let path = require('path'),
fs = require('fs-extra'),
ejs = require('ejs');


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
        let dir_temp = path.join(conf.dir_view, 'template.ejs'),
        dir_content = path.join(conf.dir_demos, req.url, 'content.ejs')

            ejs.renderFile(dir_temp, {

                cs: function () {
                    return '<script src="/js/postit.js"><\/script>'
                },
                dir_temp: dir_temp,
                dir_content: dir_content

            }, function (e, html) {

                if (e) {

                    res.end(e.message);

                } else {

                    res.setHeader('Content-Type', conf.mime);
                    res.end(html);

                }

            });

    }

};
