let spawn = require('child_process').spawn,
script = spawn('node', ['stderror_test.js', process.argv[2]]);
script.stdout.on('data', function(data){
    console.log(data.toString()); // 'this is a test'
});
// what to do for the standard error output
script.stderr.on('data', function(data){
    console.log(data.toString()); // 'this is a test'
});
