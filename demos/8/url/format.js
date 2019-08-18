let url = require('url');

let page = url.format({
        protocol: 'https',
        hostname: 'en.wikipedia.org',
        pathname: 'wiki/Node.js',
		hash: 
    });

console.log(page);
