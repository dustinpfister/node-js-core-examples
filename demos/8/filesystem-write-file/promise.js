let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,

// promisifying node write and read methods
write = promisify(fs.writeFile),
read = promisify(fs.readFile);

let path_conf = path.join(process.cwd(), 'conf.json'),
default_conf = {
    reset: false,
    count: 0
};

// read conf.json
read(path_conf)
// then if we have a conf.json
.then((json) => {
    let conf = JSON.parse(json);
    if (conf.reset) {
        conf = default_conf;
    } else {
        conf.count += 1;
    }
    console.log('updated conf.json');
    console.log(conf);
    return write(path_conf, JSON.stringify(conf));
})
// else an error
.catch((e) => {
    let conf = default_conf;
    if (e.code === 'ENOENT') {
        console.log('No conf.json, writing a new one');
        console.log(conf);
        return write(path_conf, JSON.stringify(conf));
    } else {
        console.log(e);
    }
});
