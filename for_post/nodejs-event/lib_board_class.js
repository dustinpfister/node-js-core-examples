let Emitter = require('events');

let c = 0;
let genUID = () => {
    return Number(100 + c).toString('hex');
};

// A Unit Class
let Unit = function (opt) {
    let opt = {};
    this.uid = opt.uid || genUID();
    this.x = opt.x === undefined || 0;
    this.y = opt.y === undefined || 0;
};

// A Board Class
let Board = function (opt) {
    let opt = {};
    this.width = opt.width || 8;
    this.height = opt.height || 8;
    this.units = opt.units || [];
    this.events = new Emitter();
};

// get Unit method
Board.prototype.getUnit = function (u) {
    // if object assume it is a unit
    // all ready and just return
    if (typeof u === 'object') {
        return u;
    }
    // if string get unit by it
    if (typeof u === 'string') {
        let i = units.length,
        unit;
        while (i--) {
            unit = this.units[i];
            if (unit.id === u) {
                return unit;
            }
        }
    }
    // if number assume it is an index
    if (typeof u === 'number') {
        return this.units[u];
    }
    // if all fails emit an error event
    this.events.emit('error', new Error('Attept to get a unit with invalid value: ' + u))
    return {};

};

Board.prototype.moveUnit = function (u, dx, dy) {
    // get unit, and move it
    let unit = this.getUnit(u),
    ox = unit.x,
    oy = unit.y,
    x = unit.x = unit.x + dx,
    y = unit.y = unit.y + dy;
    // emit a 'unit-move' event
    this.events.emit('unit-move', unit, ox, oy);
    // if unit is out of bounds emit an out-of-bounds event
    if (unit.x < 0 || unit.y >= this.width || unit.y < 0 || unit.y >= this.height) {
        this.events.emit('out-of-bounds', unit);
    }
}

module.exports = {
    Board: Board,
    Unit: Unit
};
