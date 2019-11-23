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

};

Board.prototype.moveUnit = function () {}

module.exports = {
    Board: Board,
    Unit: Unit
};
