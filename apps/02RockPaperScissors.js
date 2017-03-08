'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

    hand1 = hand1.toLowerCase(); //reverts input to lowercase
    hand2 = hand2.toLowerCase();

    if (hand1 === hand2) { //if hands equal each other, it's a tie
        return "It's a tie!";
    }


    //PAPER
    else if (hand1 === 'paper' && hand2 === 'rock') { //these, and all following, pit the respective winning hand against the respective losing plan and dictate which wins
        return 'Hand one wins!';
    } else if (hand1 === 'paper' && hand2 === 'scissors') {
        return 'Hand two wins!';
    }

    //ROCK
    else if (hand1 === 'rock' && hand2 === 'scissors') {
        return 'Hand one wins!';
    } else if (hand1 === 'rock' && hand2 === 'paper') {
        return 'Hand two wins!';
    }

    //SCISSORS
    else if (hand1 === 'scissors' && hand2 === 'paper') {
        return 'Hand one wins!';
    } else if (hand1 === 'scissors' && hand2 === 'rock') {
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
