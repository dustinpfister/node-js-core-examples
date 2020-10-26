let exec = require('child_process').exec;
// using wc
let wc = exec('wc -w');
wc.stdout.on('data', (data) => {
    process.stdout.write(data);
});
// Standard input of this script
let lt = new Date(), // lt (last time)
timeout = 250;
process.stdin.on('readable', () => {
    let chunk;
    lt = new Date(); // update lt if data is coming in
    while ((chunk = process.stdin.read()) !== null) {
        // writing to the standard input of wc
        wc.stdin.write(chunk);
    }
});
process.stdin.on('end', ()=>{
    wc.stdin.end();
});
// timeout check of lt
setInterval(function(){
    let t = new Date() - lt;
    if(t >= timeout){
        process.exit();
    }
}, 100);
