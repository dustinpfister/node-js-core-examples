let exec = require('child_process').exec;
// using wc
let wc = exec('wc -w');
wc.stdout.on('data', (data) => {
    process.stdout.write(data);
});
// using process for this scripts stdin
let lt = new Date(),
timeout = 250;
// piping process.stdin to wc.stdin
process.stdin.pipe(wc.stdin);
process.stdin.on('data', () => {
    lt = new Date(); // update lt if data is coming in
});
// timeout check of lt
setInterval(function(){
    let t = new Date() - lt;
    if(t >= timeout){
        process.exit();
    }
}, 100);