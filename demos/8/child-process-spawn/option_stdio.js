let spawn = require('child_process').spawn,

// set up io as ipc
script = spawn('node', ['option_stdio_test.js'], {
        stdio: ['ipc', 'pipe', 'pipe']
    });

script.on('message', (m) => {

    console.log(m);

})

script.send({
    mess: 'I can now send ipc messages with spawn!'
});
