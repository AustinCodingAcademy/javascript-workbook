'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


  function rockPaperScissors(handOne, handTwo) {
    let hand1 = handOne.trim().toLowerCase();
    let hand2 = handTwo.trim().toLowerCase();
    
    if(hand1 == 'rock' && hand2 == 'rock'){
      return "It's a tie!";
    } else if(hand1 == 'rock' && hand2 == 'paper'){
      return "Hand two wins!";
    } else if(hand1 == 'rock' && hand2 == 'scissors'){
      return "Hand one wins!";
    } else if(hand1 == 'paper' && hand2 == 'rock'){
      return "Hand one wins!";
    } else if(hand1 == 'paper' && hand2 == 'paper'){
      return "It's a tie!";
    } else if(hand1 == 'paper' && hand2 == 'scissors'){
      return "Hand two wins!";
    } else if(hand1 == 'scissors' && hand2 == 'scissors'){
      return "It's a tie!";
    } else if(hand1 == 'scissors' && hand2 == 'rock'){
      return "Hand two wins!";
    } else if(hand1 == 'scissors' && hand2 == 'paper'){
      return "Hand one wins!";
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
    //Test for all possible scenarios in which "Hand one wins!".
    it('should Test for all possible scenarios in which "Hand one wins!"', () => {
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    //Test for all possible scenarios in which "Hand two wins!".
    it('should Test for all possible scenarios in which "Hand two wins!"', () => {
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
    });
  });
} else {

  getPrompt();

}
