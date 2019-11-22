let Emitter = require('events'),
events = new Emitter();

events.on('update', (obj) => {
    console.log(obj.i)
});

events.on('overload', (obj) => {
    obj.i %= obj.iMax;
});

let obj = {
    i: 0,
    iMax: 10
};

let updateObject = function (obj) {
    obj.i += 1;
    if (obj.i > obj.iMax) {
        events.emit('overload', obj);
    }
    events.emit('update', obj);
};

setInterval(function () {
    updateObject(obj);
}, 250);
