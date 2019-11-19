let os = require('os'),
exec = require('child_process').exec;

let getOSVersion = function () {
    return new Promise((resolve, reject) => {
        let info,
        report = '';
        // figure out what command to use
        if (os.platform() === 'win32') {
            // if windows try ver
            info = exec('ver');
        } else {
            // else assume uname -a will work
            info = exec('uname -a');
        }
        // the rest should work okay
        info.stdout.on('data', (data) => {
            report += data.toString();
        });
        info.on('close', () => {
            resolve(report.trim())
        });
        info.on('error', () => {
            reject(new Error('error getting os version'));
        });
    });
};

getOSVersion()
.then((version) => {
    console.log(version);
})
.catch((e) => {
    console.log(e);
})
