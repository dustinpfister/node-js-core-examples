let rw = require('./fs-rw'),
path = require('path');

let pat_inject_html = /<%- \w+[()"'\w]+ %>/g,
pat_ext_func = /\w+[()"'\w]+/,
pat_ext_func_name = /\w+/;

// my hard coded ejs helpers
let helpers = {

    // client system helper
    cs: function () {

        //return rw.read

    }

};

let processHelpers = function (ejs, conf) {

    let injects = ejs.match(pat_inject_html),
    html = ejs;

    return new Promise(function (resolve, reject) {

        try {
            html = JSON.stringify(injects);

            resolve(html);
        } catch (e) {

            reject(e.message);

        }

    });

};

exports.parseFile = function (dir, conf) {

    return new Promise(function (resolve, reject) {

        rw.read(path.join(conf.dir_view, 'template.ejs')).then(function (ejs) {

            //resolve(ejs);

            return processHelpers(ejs, conf)

        }).then(function (html) {

            resolve(html);

        }).catch (function (mess) {

            reject(mess);

        });

    });

};
