//let rw = require('./fs-rw'),
let path = require('path'),
ejs = require('./parse-ejs.js');

module.exports = function (conf, req, res) {

    ejs.parseFile(path.join(conf.dir_view, 'template.ejs'), conf).then(function (html) {

        res.end(html);

    }).catch(function(mess){
		
		res.end(mess);
		
	});

    /*
    rw.read(path.join(conf.dir_view, 'template.ejs')).then(function (data) {

    res.end(data);

    }).catch (function (mess) {

    res.end(mess);

    });
     */

};
