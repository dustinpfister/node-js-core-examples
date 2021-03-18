let log = (mess, eol, stream) => {
    mess = mess || '';
    eol = eol || '';
    stream = stream === undefined ? process.stdout : stream;
    stream.write(mess + eol);
};

log('foo', '\n');
log('bar', '\n');
// foo
// bar


log('foo', '');
log('bar', '\n');
// foobar