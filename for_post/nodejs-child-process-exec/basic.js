
// using exec
let exec = require('child_process').exec,

script = exec('git status');

script.stdout.on('data', function(data){
    console.log(data.toString());
});

script.stderr.on('data', function(data){
    console.log(data.toString());
});


script.on('exit', function(code){
    console.log('program ended with code: ' + code);
});
