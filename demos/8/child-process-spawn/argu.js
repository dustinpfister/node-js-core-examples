let spawn = require('child_process').spawn,
a = process.argv[2] || 25,
b = process.argv[3] || 75,
script = spawn('node', ['argu_test.js', a, b]);
script.stdout.on('data', function(data){
    console.log(data.toString()); // 100
});
