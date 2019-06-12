let loadJSON = (dir_file) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(require(dir_file));
        } catch (e) {
            reject(e);
        }
    });
};

loadJSON('./my-bad-json.json')
.then((json) => {
    console.log('we are good');
    console.log(json)
}).catch ((e) => {
    console.log(e.message);
});
