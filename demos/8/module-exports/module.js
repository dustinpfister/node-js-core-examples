
let func = function () {

    return 'foo';

};


// reassign exports, and module.exports to a whole
// new Object, and make it a function
module.exports = exports = function () {

    return 'bar';

};

exports.func = func;
