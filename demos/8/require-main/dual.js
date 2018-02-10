
let func = function (mess) {

    return 'mess: ' + mess;

};

if (require.main === module) {

    // if require.main equals the module,
    // then this script was called directly from
    // the CLI
    console.log(func(process.argv[2] || 'Hello World'));

} else {

    // else it was called from another module, 
    // thus we should export what this module has
    module.exports = func;

}
