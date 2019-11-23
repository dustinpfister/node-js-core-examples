let Emitter = require('events');

let c = 0;
let genUID = () => {
    return Number(100 + c).toString('hex');
};

// A Unit Class
let Unit = function (opt) {
    opt = opt || {};
    this.uid = opt.uid || genUID();
    this.x = opt.x === undefined ? 0 : opt.x;
    this.y = opt.y === undefined ? 0 : opt.y;
};

// A Board Class
let Board = function (opt) {
    opt = opt || {};
    this.width = opt.width || 8;
    this.height = opt.height || 8;
    this.units = opt.units || [];
    this.events = new Emitter();
};

// get Unit method
Board.prototype.getUnit = function (u) {
    // if object assume it is a unit
    // all ready and just return
    if (typeof u === 'object' && u != null) {
        return u;
    }

    // if string get unit by it
    if (typeof u === 'string') {
        let i = this.units.length,
        unit;
        while (i--) {
            unit = this.units[i];
            if (unit.uid === u) {
                return unit;
            }
        }
        this.events.emit('error', new Error('unit uid ' + u + ' not found'))
        return false;
    }
    // if number assume it is an index
    if (typeof u === 'number') {
        let unit = this.units[u];
        if (typeof unit === 'object') {
            return unit;
        }
        this.events.emit('error', new Error('Unit index ' + u + ' is out of range'));
        return false;
    }
    // if all fails emit an error event, and return and empty object
    this.events.emit('error', new Error('Attempt to get a unit with invalid value: ' + u));
    return false;

};

Board.prototype.moveUnit = function (u, dx, dy) {
    // get unit
    let unit = this.getUnit(u);
    // if unit move it
    if (unit) {
        let ox = unit.x,
        oy = unit.y,
        x = unit.x = unit.x + dx,
        y = unit.y = unit.y + dy;
        // emit a 'unit-move' event
        this.events.emit('unit-move', unit, ox, oy);
        // if unit is out of bounds emit an out-of-bounds event
        if (unit.x < 0 || unit.y >= this.width || unit.y < 0 || unit.y >= this.height) {
            this.events.emit('unit-out-of-bounds', unit);
        }
    }
}

module.exports = {
    Board: Board,
    Unit: Unit
};
