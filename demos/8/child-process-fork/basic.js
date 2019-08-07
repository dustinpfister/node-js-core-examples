let fork = require('child_process').fork;
// call the script from this script
fork(process.argv[2] || './basic-test.js');
