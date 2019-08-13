let rollCount = 0;
let roll = () => {
    return Math.floor(Math.random() * 6) + 1;
};
let loop = () => {
    let t = setTimeout(loop, 100);
    let d1 = roll(),
    d2 = roll();
    console.log(d1, d2);
    if ((d1 === 1 && d2 === 1) || rollCount >= 10) {
        process.exitCode = 1;
        clearTimeout(t);
    } else {
        if (d1 === 6 && d2 === 6) {
            process.exitCode = 0;
            clearTimeout(t);
        }

        rollCount += 1;
    }
};
process.on('exit', (code) => {
    console.log('process exited with code: ' + code);
    console.log('roll count: ' + rollCount);
});
loop();
