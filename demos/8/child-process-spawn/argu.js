
// using spawn
let spawn = require('child_process').spawn,

// spawn test.js
script = spawn('node', ['argu_test.js', '25', '75']);

// what to do for the standard output for
// test.js launched via the node spawn
// child process method
script.stdout.on('data', function(data){
    console.log(data.toString());
});
