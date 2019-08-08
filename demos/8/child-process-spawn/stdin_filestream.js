let spawn = require('child_process').spawn,
fs = require('fs');
let script = spawn('node', ['stdin_filestream_process.js']);
script.stdout.on('data', (data) => {
    console.log(data.toString());
});
script.stdout.on('close', (data) => {
    console.log('done');
});
fs.createReadStream('foo.txt').pipe(script.stdin);
