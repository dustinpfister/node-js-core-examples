let fs = require('fs'),
uri_conf = './conf.json';

let step = (obj)=> {
	
	
};

fs.readFile(uri_conf, 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            let newObj = {
                count: 0
            };
            fs.writeFile(uri_conf, JSON.stringify(newObj), function (e) {
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
