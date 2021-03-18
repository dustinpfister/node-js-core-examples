let path = require('path');
let log = require( path.join(__dirname, 'log.js') );

log('Hello World', 'info', '\n');

log('no good', 'error', '\n');