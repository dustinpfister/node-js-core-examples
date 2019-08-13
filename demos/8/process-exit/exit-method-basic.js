process.stdin.on('data', (data) => {
    console.log(data);
})
process.on('exit', (code) => {
    console.log('process exited with code: ' + code);
});
process.exit(0);
