let url = require('url');

let page = new url.URL('http://myname:1234@localhost:8080/edit/posts?k=foobar#text');

console.log(page.origin);
// http://localhost:8080
console.log(page.protocol);
// http:
console.log(page.username);
// myname
console.log(page.password);
// 1234
console.log(page.host);
// localhost:8080
console.log(page.hostname);
// localhost
console.log(page.port);
// 8080
console.log(page.pathname);
// /edit/posts
console.log(page.search);
// ?k=foobar
console.log(page.hash);
// #text
console.log(page.href);
// http://myname:1234@localhost:8080/edit/posts?k=foobar#text
console.log(page.toString());
//http://myname:1234@localhost:8080/edit/posts?k=foobar#text

