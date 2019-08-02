let spawn = require('child_process').spawn,
script = spawn('node', ['stdin_test.js']);

script.stdout.on('data', (data) => {
    console.log(data.toString());
    script.kill();
});

script.stdin.write('um yeah I would think so');
