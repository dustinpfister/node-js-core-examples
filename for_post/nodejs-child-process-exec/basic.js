let exec = require('child_process').exec,
script = exec('git status');
// what to do for data coming from the standard out
script.stdout.on('data', function(data){
    console.log(data.toString());
});
// what to do with data coming from the standard error
script.stderr.on('data', function(data){
    console.log(data.toString());
});
// what to do when the command is done
script.on('exit', function(code){
    console.log('program ended with code: ' + code);
});
