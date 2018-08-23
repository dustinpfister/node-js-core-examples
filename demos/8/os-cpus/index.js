let os = require('os'),

cpus = os.cpus(),
cpuCount = cpus.length;

console.log('There are ' + cpuCount + ' cpu(s) on this system');

cpus.forEach(function (cpu, i) {

    console.log('**********');
    console.log('index ' + i);
    console.log('model: ' + cpu.model);
    console.log('speed: ' + cpu.speed);

});
