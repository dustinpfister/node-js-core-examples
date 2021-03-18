let colorCode = {
  red: '\u001b[31m',
  reset: '\u001b[39m'
};

var fullLog = (mess, type, eol, out, err, color) => {
    mess = mess || '';
    type = type || 'info';
    eol = eol || '';
    out = out === undefined ? process.stdout : out;
    err = err === undefined ? process.stderr : err;
    color = color || false;
    if(type === 'info'){
        if(color){
           out.write(colorCode.red);
        }
        out.write(mess + eol);
        if(color){
           out.write(colorCode.reset);
        }
    }
    if(type === 'error'){
        err.write(mess + eol);
    }
};

// typically log function
var api = function(mess, type, eol){
   fullLog(mess, type, eol, process.stdout, process.stderr, true);
};

// typical settings for clean output
api.clean = function(mess, type){
   fullLog(mess, type, '', process.stdout, process.stderr, false);
};

// making full log method public
api.fullLog = fullLog;

module.exports = api;