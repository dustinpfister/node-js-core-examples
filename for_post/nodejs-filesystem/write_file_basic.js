let fs = require('fs'),
path = require('path'),
promisify = require('util').promisify,
cwd = process.cwd(),
write = promisify(fs.writeFile);

let path_db = path.join(cwd, 'db.json'),
db = [{
        cost: 2.8,
        shelfPrice: 2.99,
        desc: 'Cheepo Red Wine'
    }
],
json = JSON.stringify(db);

// write the json file
write(path_db, json, 'utf8')
.then(() => {
    console.log('created db')
})
.catch(() => {
    console.log(e.message);
});
