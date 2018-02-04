console.log('child process started');

let st = new Date();
setInterval(function () {

    let time = new Date() - st;

    // log what this script is doing
    console.log('child: ' + time);

}, 500);
