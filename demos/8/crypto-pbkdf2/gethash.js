let crypto = require('crypto');

let sha_options = crypto.getHashes().filter((hash) => {

        return hash.match(/^sha/);

    });

console.log(sha_options);
