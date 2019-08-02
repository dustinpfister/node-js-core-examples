process.on('message', (m) => {

    console.log(m);
    process.send({
        mess: 'this is from the child process'
    })

})
