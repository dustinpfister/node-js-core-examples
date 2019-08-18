let url = require('url');

let page = new url.URL('http://myname:1234@localhost:8080/edit/posts?k=foobar#text');

console.log(page);
