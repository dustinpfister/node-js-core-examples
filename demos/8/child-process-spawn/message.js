
/*
let spawn = require('child_process').spawn,
script = spawn('node', ['message_test.js']);
 */

let fork = require('child_process').fork,
script = fork('message_test.js');

script.on('message', (m) => {

    console.log(m);

});

script.on('close', () => {

    console.log('close');

})
