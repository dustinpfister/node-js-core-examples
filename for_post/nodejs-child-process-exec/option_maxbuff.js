let exec = require('child_process').exec,
opt = {
    maxBuffer: 41 * 20
},
script = exec('git log -n 20 --format=\"%H\"', opt),
out = '';
script.stdout.on('data', function (data) {
    out += data;
});
script.stderr.on('data', function (data) {
    console.log(data);
});
script.on('exit', function (code) {
    console.log(out);
    console.log('program ended with code: ' + code);
});
