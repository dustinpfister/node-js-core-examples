let colorCode = {
  black: '\u001b[30m',
  red: '\u001b[31m',
  green: '\u001b[32m',
  orange: '\u001b[33m',
  blue: '\u001b[34m',
  purple: '\u001b[35m',
  cyan: '\u001b[36m',
  white: '\u001b[37m',
  reset: '\u001b[39m'
};

var logType = function(mess, eol, type, stream, colors){
    if(colors){
       stream.write(colorCode[colors[type] || 'white']);
    }
    stream.write(mess + eol);
    if(colors){
       stream.write(colorCode.reset);
    }
};

var fullLog = (mess, type, eol, out, err, colors) => {
    mess = mess || '';
    type = type || 'info';
    eol = eol || '';
    out = out === undefined ? process.stdout : out;
    err = err === undefined ? process.stderr : err;
    colors = colors || false;
    if(type === 'info'){
        logType(mess, eol, type, out, colors);
    }
    if(type === 'error'){
        logType(mess, eol, type, err, colors);
    }
};

// typically log function
var api = function(mess, type, eol){
   fullLog(mess, type, eol, process.stdout, process.stderr, {
       info: 'cyan',
       error: 'red'
   });
};

// typical settings for clean output
api.clean = function(mess, type){
   fullLog(mess, type, '', process.stdout, process.stderr, false);
};

// making full log method public
api.fullLog = fullLog;

module.exports = api;