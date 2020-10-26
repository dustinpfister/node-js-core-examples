// using exec
let exec = require('child_process').exec;
// creating an instance of child process by way of exec call
// of the node using the coder.js file
let script = exec('node coder');
// what to do for standard out
script.stdout.on('data', (data) => {
    console.log(data);
});
// writing 'foobar' to the standard input of coder.js
script.stdin.write('foobar');
// end standard input
script.stdin.end();
