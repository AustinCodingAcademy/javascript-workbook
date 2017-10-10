'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {

    let hand1Convert = hand1.toLowerCase().trim();
    let hand2Convert = hand2.toLowerCase().trim();

    var hand1Wins = "Hand one wins!";
    var hand2Wins = "Hand two wins!";
    var noWinner = "It's a tie!";

    if (hand1Convert === hand2Convert) {
        return noWinner;
    } else if (hand1Convert === 'rock' && hand2Convert === 'paper') {
        return hand2Wins;
    } else if (hand1Convert === 'rock' && hand2Convert === 'scissors') {
        return hand1Wins;
    } else if (hand1Convert === 'paper' && hand2Convert === 'rock') {
        return hand1Wins;
    } else if (hand1Convert === 'paper' && hand2Convert === 'scissors') {
        return hand2Wins;
    } else if (hand1Convert === 'scissors' && hand2Convert === 'rock') {
        return hand2Wins;
    } else if (hand1Convert === 'scissors' && hand2Convert === 'paper') {
        return hand1Wins;
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
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
