let url = require('url');

let base = 'https://nodejs.org/docs/';

let v = 8,
urls = [];
while (v <= 12) {
    urls.push(url.resolve(base, 'latest-v' + v + '.x/api/'));
    v += 1;
}

console.log(urls);
/*
['https://nodejs.org/docs/latest-v8.x/api/',
'https://nodejs.org/docs/latest-v9.x/api/',
'https://nodejs.org/docs/latest-v10.x/api/',
'https://nodejs.org/docs/latest-v11.x/api/',
'https://nodejs.org/docs/latest-v12.x/api/']
*/
