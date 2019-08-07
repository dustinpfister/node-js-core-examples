// and the standard in is inherited from
// the parent process by default also
process.stdin.on('data', (data) => {
    console.log(data.toString('hex'));
});
process.stdin.on('end', (data) => {
    console.log('end of data');
});