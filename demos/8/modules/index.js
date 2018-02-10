

// if this script is called directly
// require.main should equal module
console.log(require.main === module); // true

console.log(require('./index.js'));