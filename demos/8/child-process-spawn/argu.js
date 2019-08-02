let spawn = require('child_process').spawn,
script = spawn('node', ['argu_test.js', '25', '75']);
script.stdout.on('data', function(data){
    console.log(data.toString()); // 100
});
