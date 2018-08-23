// using the os, and cluster modules
let os = require('os'),
cluster = require('cluster');

if (cluster.isMaster) {

    // this is for the master process that is started by calling
    // this script with node from the command line

    // Calling the os.cpus method will give an array of objects
    // with some basic info on the numder of cpus
    // on the system
    let cpus = os.cpus();

    console.log('master: I am the master process.');

    // for each cpu
    cpus.forEach(function (cpu, i) {

        console.log('master: forking a child process for cpu ' + i);

        // fork this script to a new worker by calling cluster.fork
        // this will return an instance of Worker
        let worker = cluster.fork();

        // I can set some events for the worker here if I want
        worker.on('exit', function () {

            console.log('child: All done.');

        })

    });

    // the exit event will fire each time
    // a worker exits
    cluster.on('exit', function () {

        let activeWorkers = Object.keys(cluster.workers).length;

        if (activeWorkers === 0) {

            console.log('master: My work is done.');
            process.exit();

        }

    });

} else {

    // for this example a child process just logs to the screen
    // and exits
    console.log('child: hello I am a child process.');
    process.exit();

}
