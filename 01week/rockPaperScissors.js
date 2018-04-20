'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
    hand1 = hand1.toLowerCase(); //changes all letters to lower case
    hand2 = hand2.toLowerCase();
    hand1 = hand1.trim(); //trims whitespace from beginning and end of string
    hand2 = hand2.trim();
    const rpsArr = ['rock', 'paper', 'scissors'];
    if (rpsArr.indexOf(hand1) === -1 | rpsArr.indexOf(hand2) === -1) { //checks if both hand1 and hand2 are valid inputs
      return 'invalid input';
    } // returns invalid input and prompt() will prompt for new inputs
    if (hand1 === hand2) { //checks for a tie
      return "It's a tie!"
    } else if ((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'scissors' && hand2 === 'paper') || (hand1 === 'paper'
     && hand2 === 'rock')) { //checks for all cases where hand1 wins
      return "Hand one wins!"
    } else { //if hand1 doesn't win then hand2 wins
      return "Hand two wins!"
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
