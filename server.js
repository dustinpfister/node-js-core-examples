let http = require('http'),
path = require('path');

let conf = {

    port: process.env.PORT || process.argv[2] || 8080,

    // dirs to be used in my libs
    dir_root: __dirname,
    dir_lib: path.join(__dirname, 'lib'),
    dir_demos: path.join(__dirname, 'demos'),
    dir_view: path.join(__dirname, 'view')

};



let server = http.createServer();

server.on('request', function (req, res) {

    require('./lib/request')(conf, req, res);

});

server.listen(conf.port, function () {

    console.log('app is up on port: ' + conf.port);

});
