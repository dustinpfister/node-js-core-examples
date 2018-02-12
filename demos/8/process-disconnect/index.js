
let fork = require('child_process').fork,

child = fork('child');

child.send(2);
child.send(12);
child.send(42);

child.disconnect();