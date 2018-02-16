process.on('message', function (n) {

    if (n === 42) {

        console.log('yes that is the answer');

    } else {

        console.log('nope');

    }

});

process.on('disconnect', function (a, b) {

    console.log('okay, goodbye');

});
