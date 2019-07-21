let crypto = require('crypto');

let sha_options = crypto.getHashes().filter((hash) => {
        return hash.match(/^sha/);
    });
console.log(sha_options);
/*[ 'sha',
  'sha1',
  'sha1WithRSAEncryption',
  'sha224',
  'sha224WithRSAEncryption',
  'sha256',
  'sha256WithRSAEncryption',
  'sha384',
  'sha384WithRSAEncryption',
  'sha512',
  'sha512WithRSAEncryption',
  'shaWithRSAEncryption' ]
*/