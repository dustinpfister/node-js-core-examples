let spawn = require('child_process').spawn,
// set up io as ipc
options = {
    stdio: ['ipc', 'pipe', 'pipe']
},
script = spawn('node', ['option_stdio_test.js'], options);
// what to do when this parent process
// receives a message from the node child process
script.on('message', (m) => {
    console.log(m.b); // 12
    script.kill();
});
// send an IPC message to the
// child process
script.send({
    a: 5
});
