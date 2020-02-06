module.exports = function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('index path');
    res.end();
};
