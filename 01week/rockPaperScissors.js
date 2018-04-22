'use strict'

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  // Write code here
  // Create code for paper as first hand to execute win, loss, or tie.
  // Add the toLowerCase() function to pass tests.
  if(hand1.toLowerCase() === 'paper' && hand2 === 'rock') {
    return "Hand one wins!";
  } else if (hand1.toLowerCase() === 'paper' && hand2.toLowerCase() === 'scissors') {
    return "Hand two wins!";
  } else if (hand1.toLowerCase().trim() === 'scissors' && hand2.toLowerCase() === 'rock') {
    return "Hand two wins!";
  } else if (hand1.toLowerCase() === 'scissors' && hand2.trim() === 'paper') {
    return "Hand one wins!";
  } else if (hand1.toLowerCase().trim() === 'rock' && hand2.toLowerCase() === 'scissors') {
    return "Hand one wins!";
  } else if (hand1.toLowerCase() === 'rock' && hand2.trim() === 'paper') {
    return "Hand two wins!";
  } else if(hand1 === hand1) {
    return "It's a tie!";
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
