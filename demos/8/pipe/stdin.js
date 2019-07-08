process.stdin.setEncoding('hex');
process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write(chunk);
    }
});
