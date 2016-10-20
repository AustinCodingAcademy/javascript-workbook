'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
    var hand1 = hand1.toLowerCase();
    var hand2 = hand2.toLowerCase();
    var choice = ['rock', 'paper', 'scissors'];

    if (hand1 !== choice || hand2 !== choice) {
        return "Not a valid input stupid!!"
    }

    if (hand1 === hand2) {
        return "It's a tie!";
    }

    if (hand1 === choice[0]) {
        if (hand2 === choice[2]) {
            return 'Hand one wins!';
        }
        return 'Hand two wins!';
    }

    if (hand1 === choice[1]) {
        if (hand2 === choice[0]) {
            return 'Hand one wins!';
        }
        return 'Hand two wins!';
    }

    if (hand1 === choice[2]) {
        if (hand2 === choice[1]) {
            return 'Hand one wins!';
        }
        return 'Hand two wins!';
    }

}

function getPrompt() {
    rl.question('hand1: ', (answer1) => {
        rl.question('hand2: ', (answer2) => {
            console.log(rockPaperScissors(answer1, answer2));
            getPrompt();
        });
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#rockPaperScissors()', function() {
        it('should detect a tie', function() {
            assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
            assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
            assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
        });
        it('should detect which hand won', function() {
            assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
            assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
            assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        });
    });
} else {

    getPrompt();

}
