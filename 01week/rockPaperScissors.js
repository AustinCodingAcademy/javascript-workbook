'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

    if (hand1 === hand2) {
        return `It's a tie!`;
    }
    if (hand1 === 'rock' || 'Rock' || 'ROCK') {
        if (hand2 === 'paper') {
            return 'Hand two wins!';
        } else {
            return 'Hand one wins!';
        }
    }
    if (hand1 === 'paper' || 'Paper' || 'PAPER') {
        if (hand2 === 'rock') {
            return 'Hand one wins!';
        } else {
            return 'Hand two wins!';
        }
    }
    if (hand1 === 'scissors' || 'Scissors' || 'SCISSORS') {
        if (hand2 === 'rock') {
            return 'Hand one wins!';
        } else {
            return 'Hand two wins!';
        }
    }

};

function getPrompt() {
    rl.question('hand1: ', (answer1) => {
        // rl.question('hand2: ', (answer2) =>
        const random = Math.random();
        let answer2 = null;
        if (random < .33) {
            answer2 = 'rock'
        } else if (random < .66) {
            answer2 = 'paper'
        } else {
            answer2 = 'scissors'
        }
        console.log(random);
        console.log('Computer :' + answer2);
        console.log(rockPaperScissors(answer1, answer2));
        getPrompt();

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
            assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        });
    });
} else {

    getPrompt();

}
