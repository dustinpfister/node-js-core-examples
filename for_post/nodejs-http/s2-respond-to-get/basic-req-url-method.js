let http = require('http'),
server = http.createServer(),
port = 8080,
host = 'localhost';

// path objects
let pathObjects = [];
pathObjects.push({
    pattern: '/',
    GET: function (req, res, next) {
        res.mess = 'this is root';
        next();
    }
});

// get a path object by the given pattern
let getPathObj = (pattern) => {
    let i = 0,
    len = pathObjects.length;
    while (i < len) {
        var pathObj = pathObjects[i];
        if (typeof pathObj.pattern === 'string') {
            if (pathObj.pattern === pattern) {
                return pathObj;
            }
        }
        i += 1;
    }
    return null;
};

let sendMess = (req, res, mess) => {
    res.write(mess);
    res.end();
};

let sendMessObj = (req, res) => {
    sendMess(req, res, res.mess);
};

// on request
server.on('request', (req, res) => {
    res.mess = 'unkown path';
    let pathObj = getPathObj(req.url);
    if (pathObj) {
        let forMethod = pathObj[req.method];
        if (forMethod) {
            forMethod(req, res, () => {
                sendMessObj(req, res)
            });
        } else {
            sendMess(req, res, 'unsuppored http method: ' + req.method);
        }
    } else {
        sendMess(req, res, 'no path object for: ' + req.url);
    }
});
// on listening
server.on('listening', () => {
    let add = server.address();
    console.log('static server up on http://' + add.address + ':' + add.port);
}); ;
// listen
server.listen(port, host);
