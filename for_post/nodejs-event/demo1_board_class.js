let board = require('./lib_board_class.js');

let gameBoard = new board.Board({
        width: 5,
        height: 5,
        units: [
            new board.Unit({
                x: 1,
                y: 1,
                uid: 'player'
            })
        ]
    });

// set some handlers for my events
gameBoard.events.on('error', function (e) {
    console.log('')
    console.log('Error:')
    console.log(e.message);
    console.log('');
});
gameBoard.events.on('unit-move', function (unit, ox, oy) {
    console.log('')
    console.log('Unit moved:');
    console.log('from: ' + ox + ',' + oy);
    console.log('to: ' + unit.x + ',' + unit.y);
    console.log('')
});
gameBoard.events.on('unit-out-of-bounds', function (unit) {
    console.log('')
    console.log('Unit is out of bounds:');
    console.log('unit uid: ' + unit.uid);
    console.log('')
});

gameBoard.moveUnit('player', -1, 0);
gameBoard.moveUnit('player', -1, 0);
gameBoard.moveUnit(null, -1, 0);
