let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify;

let mkdir = promisify(fs.mkdir),
writeFile = promisify(fs.writeFile);

// make the maps folder
let mkMapsFolder = () => {
    // attempt to make a new maps folder
    return mkdir('./maps')
    // if successful just resolve
    .then(() => {
        return promise.resolve();
    })
    // folder is there or other error
    .catch((e) => {
        // if it is just there all ready resolve
        if (e.code === 'EEXIST') {
            return Promise.resolve();
        } else {
            // else reject because of other error
            return Promise.reject(e);
        }
    });
};

// write a map file
let writeMapFile = (opt) => {
    opt = opt || {};
    opt.name = opt.name || '';
    opt.root = opt.root || path.resolve('./');
    opt.fileName = opt.fileName || 'map_' + opt.name + '.json';
    opt.width = opt.width || 10;
    opt.height = opt.height || 10;
    // create cells
    let i = 0,
    cells = [],
    len = opt.width * opt.height;
    while (i < len) {
        cells.push({
            type: 'blank'
        });
        i += 1;
    }
    // create map object
    let map = {
        name: opt.name,
        width: opt.width,
        height: opt.height,
        cells: cells
    };
    console.log('writing map: ' + opt.fileName);
    // write map
    return writeFile(path.join(opt.root, opt.fileName), JSON.stringify(map), 'utf8');

};

mkMapsFolder()
.then(() => {
    console.log('all is good with maps folder, creating maps.');
    let maps = [],
    i = 0,
    mapCount = 10;
    while (i < mapCount) {
        maps.push(writeMapFile({
                root: './maps',
                name: i + 1
            }));
        i += 1;
    }
    return Promise.all(maps);
})
.then(() => {
    console.log('all maps created');
})
.catch((e) => {
    console.log(e.message);
});
