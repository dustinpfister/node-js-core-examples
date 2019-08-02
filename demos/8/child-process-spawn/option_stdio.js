let spawn = require('child_process').spawn,

// set up io as ipc
script = spawn('node', ['option_stdio_test.js'], {
        stdio: ['ipc', 'pipe', 'pipe']
    });

script.on('message', (m) => {

    console.log(m.b); // 12
    script.kill();

})

script.send({
    a: 5
});
