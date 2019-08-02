process.stdin.on('data', (data) => {
    process.stdout.write(data.toString());
    process.stdout.write(data.toString('hex'))
});
