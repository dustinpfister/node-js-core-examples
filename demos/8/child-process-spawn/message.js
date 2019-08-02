let fork = require('child_process').fork,
script = fork('message_test.js');

script.on('message', (m) => {
    console.log(m);
});

script.on('close', () => {
    console.log('close');
});
