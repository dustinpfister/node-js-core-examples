// keep looping until a condition is met
let loop = () => {
    let t = setTimeout(loop, 100);
    let rnd = Math.floor(Math.random() * 6) + 1;
    console.log(rnd);
    if (rnd === 6) {
        process.exit(0);
    }
};

loop();
