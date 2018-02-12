
// two dice
let dice = {

    // the state of the dice
    state: [1, 1],
    total: 2,

    // roll the dice
    roll: function () {

        let self = this;

        this.total = 0;

        this.state = this.state.map(function () {

                let n = Math.floor(Math.random() * 6) + 1;

                self.total += n;

                return n;

            });

    },

    // do all dice equal each other?
    allEqual: function () {

        let i = 1,
        len = this.state.length

            if (len === 0) {

                return true;

            }
            while (i < len) {

                if (this.state[i] != this.state[i - 1]) {

                    return false;

                }

                i += 1;

            }

            return true;

    }

};

let run = function () {

    dice.roll();
    console.log(dice.state + ' : ' + dice.total);

};
run();

// What to do when the script is over
process.on('beforeExit', function () {

    // roll again if we have doubles
    if (dice.allEqual()) {

        console.log('dubbles roll again:');

        run();

    }

    console.log('exiting');

});
