process.on('message', (m) => {

    process.send({
        b: m.a + 7
    })

})
