let fs = require('fs'),
uri_conf = './conf.json';

let step = (obj) => {
    obj.count += 1;
    console.log('count is now: ' + obj.count);
    fs.writeFile(uri_conf, JSON.stringify(obj), (e) => {
        if (e) {
            console.log(e.message)
        } else {
            console.log('updated conf.json');
        }
    })
};

fs.readFile(uri_conf, 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log('NO conf.json FILE, making a new one!');
            let newObj = {
                count: 0
            };
            fs.writeFile(uri_conf, JSON.stringify(newObj), (e) => {
                if (!e) {
                    step(newObj);
                }
            })
        }
    } else {
        try {
            step(JSON.parse(data));
        } catch (e) {
            console.warn(e.message);
        }
    }
});
