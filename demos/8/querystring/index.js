

let qs = require('querystring'),

str = 'foo=bar&anwser=42';

console.log(qs.parse(str));
// { foo: 'bar', anwser: '42' }

str = '?whoops=mybad&sorry=true';
console.log(qs.parse(str));
// { '?whoops': 'mybad', sorry: 'true' }

str = '?whoops=nope&sorry=false';
str = str[0] === '?' ? str.substr(1, str.length) : str;

console.log(qs.parse(str));
// { whoops: 'nope', sorry: 'false' }

let url = 'http://www.foo.com/bar/answer.html?a=42&t=1000';

str = url.split('?')[1];

console.log(qs.parse(str));
// { a: '42', t: '1000' }


let parseQS = function (str) {

    // if not a string return an empty object
    if (typeof str != 'string') {

        return {};

    }

    // if there is a question mark,
    // split the string, and use the
    // second part
    if (str.indexOf('?') != -1) {

        str = str.split('?')[1];

    }

    // there should be at least one
    // equal sign, if so parse
    if (str.indexOf('=') != -1) {

        // parse the string with the usual delimiters,
        // and set a value for max keys 
        return qs.parse(str,'&','=',{maxKeys:3});

    }

    // default to returning an empty object if we make it here
    return {};

};

console.log('**********');


// any non string should given an empty object
console.log(parseQS(42)); // {}
console.log(parseQS(null)); // {}

// if no questing mark, but there is an equal sign it should parse
console.log(parseQS('foo=bar&answer=42'));
// { foo: 'bar', anwser: '42' }

// but it can handle it just fine if it is there
console.log(parseQS('?whoops=nope&sorry=false'));
// { whoops: 'nope', sorry: 'false' }

// works when given full url examples
console.log(parseQS('http://www.foo.com/bar/answer.html?a=42&t=1000'));
//{ a: '42', t: '1000' }
console.log(parseQS('http://www.foo.com/bar/answer.html'));
// {}

// max for keys set
console.log(parseQS('a=1&b=2&c=3&d=4'));
// { a: '1', b: '2', c: '3' }
