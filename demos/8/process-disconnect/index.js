
let spawn = require('child_process').spawn;

let child = spawn('node', ['roll']);

child.stdout.on('data', function (data) {

    console.log(data.toString());

});
