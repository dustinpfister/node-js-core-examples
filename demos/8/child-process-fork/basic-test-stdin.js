// the standard out
process.stdout.write('hello node fork! : ');
// and the standard in are inherited from
// the parent process by default
process.stdin.on('data', (data) => {
    console.log(data.toString('hex'));
});

process.stdin.on('end', (data) => {
    console.log('end of data');
});