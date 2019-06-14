let fs = require('fs'),
path = require('path'),
path_conf = path.join(process.cwd(), 'conf.json'),
default_conf = {
    reset: false,
    count: 0
};
// write
let write = (file_path, text) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file_path, text, 'utf-8', (e) => {
            if (e) {
                reject(e);
            } else {
                resolve(text);
            }
        });
    });
};

// read
let read = (file_path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file_path, 'utf-8', (e, text) => {
            if (e) {
                reject(e);
            } else {
                resolve(text);
            }
        });
    });
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
.catch ((e) => {
    let conf = default_conf;
    console.log('ERROR reading conf.json, writing a new one');
    console.log(conf);
    return write(path_conf, JSON.stringify(conf));
});
