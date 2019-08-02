
// using spawn
let spawn = require('child_process').spawn,

// spawn test.js
script = spawn('node', ['basic_test.js']);

// what to do for the standard output for
// test.js launched via the node spawn
// child process method
script.stdout.on('data', function(data){
    console.log(data.toString());
});
