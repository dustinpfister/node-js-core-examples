module.exports = (mess, type, eol, out, err) => {
    mess = mess || '';
    type = type || 'info';
    eol = eol || '';
    out = out === undefined ? process.stdout : out;
    err = err === undefined ? process.stderr : err;
    if(type === 'info'){
        out.write(mess + eol);
    }
    if(type === 'error'){
        err.write(mess + eol);
    }
};
