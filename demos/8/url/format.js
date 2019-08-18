let url = require('url');

let page = url.format({
        protocol: 'https',
        hostname: 'en.wikipedia.org',
        pathname: 'wiki/Node.js',
        hash: 'Overview'
    });

console.log(page);
// https://en.wikipedia.org/wiki/Node.js#Overview
