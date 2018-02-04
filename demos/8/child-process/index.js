
// using spawn
let spawn = require('child_process').spawn,

script = spawn('node', ['test.js']);

script.stdout.on('data', function(data){

    console.log(data.toString());

});
