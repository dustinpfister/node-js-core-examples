process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write('we have a chunk: \n');
		console.log(chunk.length);
        process.stdout.write(chunk);
    }
});
