// Just using nodejs crypto module
const crypto = require('crypto');
// parse arguments
const str_passwd = process.argv[2] || 'password';
const str_iv = process.argv[3] || 'foobar';
const str_a = process.argv[4] || 'AES-256-CBC';
const str_mode = process.argv[5] || 'cipher';
const str_EOL_flag = process.argv[6] === undefined ? 'y' : process.argv[6];
let str_EOL = '\n';
if(str_EOL_flag != 'y'){
    str_EOL = '';
}
// fortamts
const str_format1 = 'hex';
const str_format2 = 'utf8';
// create key, iv, as well as cipher and decipher class instances
const key = Buffer.concat([ Buffer.from(str_passwd) ], 32);
const iv = Buffer.concat([ Buffer.from(str_iv) ], 16); 
const cipher = crypto.createCipheriv( str_a, key, iv );
const decipher = crypto.createDecipheriv(str_a, key, iv);
// init output variable, attach events for cipher and decipher
let str_out = '';
decipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = decipher.read())) {
        str_out += chunk.toString( str_format2 );
    }
});
decipher.on('end', () => {
    process.stdout.write(str_out  + str_EOL);
});
cipher.on('data', (data) => {
    str_out += data.toString( str_format1 );
});
cipher.on('end', () => {
    process.stdout.write( str_out + str_EOL );
});
// process standard input   
process.stdin.on('data', (data)=>{
    if(str_mode === 'decipher'){
        decipher.write(data.toString( str_format2 ), str_format1);
    }
    if(str_mode === 'cipher'){
        cipher.write(data.toString( str_format2 ), str_format2);
    }
});
process.stdin.on('end', (data)=>{
    if( str_mode === 'decipher' ){
        decipher.end();
    }
    if( str_mode === 'cipher' ){
        cipher.end();
    }
});

