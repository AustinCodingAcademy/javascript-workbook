'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // check for tie - if hand1 is the same as hand2 return tie.
  //check for win.
  //if hand1 is rock and hand2 is paper - return hand2 wins
  //if hand1 is paper and hand2 is scissors - return hand 2 wins
  //if hand1 is rock and hand2 is scissors - return hand1 wins
  //use ternary statements to make comparisons
  
  if(hand1 === hand2) {
    return "It's a tie";
  }
  else if(hand1 === 'rock') {
    return hand2 === 'paper' ? "Hand two wins!" : "Hand one wins!";
  }
  else if(hand1 === 'paper') {
    return hand2 === 'rock' ? "Hand one wins!" : "Hand two wins!";
  }
  else if(hand1 === 'scissors') {
    return hand2 === 'rock' ? "Hand two wins!" : "Hand one wins!";
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
