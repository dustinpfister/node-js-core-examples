console.log('this works of course');
//console.log(process.send);
process.send({mess: 'hello there'});

setTimeout(() => {

    console.log('what the hell');

}, 5000);
