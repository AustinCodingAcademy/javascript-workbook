'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here
  //if statement for a tie
  if (hand1 === hand2) {
     return 'Its a tie.'
  }
  //Making an array of choices
  const rpsArray = ['rock', 'paper', 'scissors'];
     
  
  //if statement for if hand1 = 'rock' and hand2 = 'scissors'
  if (hand1 === rpsArray[0] && hand2 === rpsArray[2]) {
    return 'Hand 1 Wins!';
  }
  if (hand1 === rpsArray[1] && hand2 === rpsArray[0]) {
    return 'Hand 1 Wins!';
  }
  if (hand1 === rpsArray[2] && hand2 === rpsArray[1]) {
    return 'Hand 1 Wins!';
  } else {
    return 'Hand 2 Wins!';
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
