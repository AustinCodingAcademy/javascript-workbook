'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function rockPaperScissors(a, b) {
    // make variables that allow the function to pass the test ie. lowercase and whitespace.
    const hand1 = a.toLowerCase().trim();
    const hand2 = b.toLowerCase().trim();
    //check for a tie
    if (hand1 === hand2) {
        return "It's a tie!";
        // Write code here
        // Check for hand one win
    } else if (hand1 === 'rock' && hand2 === 'scissors' || hand1 === 'paper' && hand2 === 'rock' || hand1 === 'scissors' && hand2 === 'paper') {
        return "Hand one wins!"
        //Check for player two win
    } else if (hand1 === 'rock' && hand2 === 'paper' || hand1 === 'paper' && hand2 === 'scissors' || hand1 === 'scissors' && hand2 === 'rock') {
        return "Hand two wins!"
    }else if (hand1 && hand2 !== 'rock', 'paper', 'scissors'){
    return "You are not playing the game!"
}
}

function getPrompt() {
    rl.question('hand1: ', (answer1) => {
        rl.question('hand2: ', (answer2) => {
            console.log( rockPaperScissors(answer1, answer2) );
            getPrompt();
        });
    });
}

// Tests

if (typeof describe === 'function') {
    describe('#rockPaperScissors()', () => {
        it('should detect a tie', () => {
            assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
            assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
            assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
        });
        it('should detect which hand won', () => {
            assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
            assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
            assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!")
            assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        });
        it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
            assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
            assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
            assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
        });
        it('shoulde check for unassigned words', () => {
            assert.notEqual(rockPaperScissors('rock, paper, scissors', 'rock, paper, scissors'), "You are not playing the game!");
        });
    });
} else {

    getPrompt();

}