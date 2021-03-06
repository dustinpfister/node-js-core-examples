let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify;

let mkdir = promisify(fs.mkdir),
writeFile = promisify(fs.writeFile),
readFile = promisify(fs.writeFile),
readdir = promisify(fs.readdir);

// make the maps folder
let mkMapsFolder = (root) => {
    root = root || process.cwd();
    // attempt to make a new maps folder
    return mkdir(path.join(root, 'maps'))
    // if successful just resolve
    .then(() => {
        return Promise.resolve();
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
    opt.width = opt.width || 4;
    opt.height = opt.height || 4;
    opt.forCell = opt.forCell || function (cell) {
        return cell;
    };
    // create cells
    let i = 0,
    cells = [],
    len = opt.width * opt.height;
    while (i < len) {
        cells.push(opt.forCell({
                type: 'blank',
                i: i,
                x: i % opt.width,
                y: Math.floor(i / opt.width)
            }));
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

// make maps folder with all maps
let writeMapsFolder = (opt) => {
    opt = opt || {};
    opt.root = opt.root || process.cwd();
    opt.forCell = opt.forCell || function (cell) {
        return cell;
    };
    opt.mapCount = opt.mapCount || 10;
    opt.cellWidth = opt.cellWidth || 12;
    opt.cellHeight = opt.cellHeight || 12;
    return mkMapsFolder(opt.root)
    .then(() => {
        console.log('all is good with maps folder, creating maps.');
        let maps = [],
        i = 0;
        while (i < opt.mapCount) {
            maps.push(writeMapFile({
                    root: path.join(opt.root, 'maps'),
                    name: i + 1,
                    forCell: opt.forCell,
                    width: opt.cellWidth,
                    height: opt.cellHeight,
                }));
            i += 1;
        }
        // resolve when map writes resolve
        return Promise.all(maps);
    });
};

// demo
writeMapsFolder({
    root: './',
    mapCount: 5,
    cellWidth: 4,
    cellHeight: 2,
    forCell: function (cell) {
        cell.type = 'grass';
        return cell;
    }
}).then(() => {
    console.log('all maps created');
})
.catch((e) => {
    console.log(e.message);
});
