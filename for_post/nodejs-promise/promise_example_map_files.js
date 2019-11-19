let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify;

let mkdir = promisify(fs.mkdir),
writeFile = promisify(fs.writeFile),
readFile = promisify(fs.readFile),
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
    opt.forMap = opt.forMap || function (map) {
        return map;
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
            }, i));
        i += 1;
    }
    // create map object
    let map = opt.forMap({
            name: opt.name,
            width: opt.width,
            height: opt.height,
            cells: cells
        });
    console.log('writing map: ' + opt.fileName);
    // write map
    return writeFile(path.join(opt.root, opt.fileName), JSON.stringify(map), 'utf8');
};
// build an index
let writeMapIndex = (opt) => {
    opt = opt || {};
    opt.root = path.resolve(opt.root || process.cwd());
    return readdir(path.join(opt.root, 'maps'))
    .then((files) => {
        // read all map files
        return Promise.all(files.map((fileName) => {
                return readFile(path.join(path.join(opt.root, 'maps', fileName)), 'utf8')
                .then((map) => {
                    console.log('read ' + fileName);
                    map = JSON.parse(map);
                    map.fileName = fileName;
                    return map
                });
            }))
        // build index for all map files
        .then((maps) => {
            console.log('building index for ' + maps.length + ' map files');
            let json = JSON.stringify(maps.map((map) => {
                        return path.join(opt.root, 'maps', map.fileName);
                    }));
            return writeFile(path.join(opt.root, 'map_index.json'), json, 'utf8');
        });
    });
};

// make maps folder with all maps
let writeMapsFolder = (opt) => {
    opt = opt || {};
    opt.root = opt.root || process.cwd();
    opt.forCell = opt.forCell || function (cell) {
        return cell;
    };
    opt.forMap = opt.forMap || function (map) {
        return map;
    };
    opt.mapCount = opt.mapCount || 10;
    opt.cellWidth = opt.cellWidth || 12;
    opt.cellHeight = opt.cellHeight || 12;
    // start by making maps folder if it is not there
    return mkMapsFolder(opt.root)
    // then write a map file for each mapCount
    .then(() => {
        console.log('all is good with maps folder, creating maps.');
        let maps = [],
        i = 0;
        while (i < opt.mapCount) {
            maps.push(writeMapFile({
                    root: path.join(opt.root, 'maps'),
                    name: i + 1,
                    forCell: opt.forCell,
                    forMap: opt.forMap,
                    width: opt.cellWidth,
                    height: opt.cellHeight,
                }));
            i += 1;
        }
        // resolve when map writes resolve
        return Promise.all(maps);
    })
    // then build index
    .then(() => {
        console.log('done writing map files building index now.');
        return writeMapIndex({
            root: opt.root
        });

    })
};

// demo
writeMapsFolder({
    root: './',
    mapCount: 5,
    cellWidth: 2,
    cellHeight: 2,
    forCell: function (cell) {
        cell.type = 'grass';
        // worth value for each cell
        cell.worth = 50 + Math.round(50 * Math.random());
        return cell;
    },
    forMap: function (map) {
        // tabulate map cell worth
        map.worth = map.cells.reduce((acc, cell) => {
                acc = typeof acc === 'object' ? acc.worth : acc;
                return acc + cell.worth;
            });
        return map;
    }
}).then(() => {
    console.log('done creating map files and map index');
})
.catch((e) => {
    console.log(e.message);
});
