'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  function rockPaperScissors(cleanHand1, cleanHand2) {
    let hand1 = cleanHand1.trim().toLowerCase();
    let hand2 = cleanHand2.trim().toLowerCase();
    if (hand1 == 'rock' && hand2 =='scissors'){
      return 'hand1 wins!';
    } else if (hand1 == 'rock' && hand2 == 'paper'){
      return 'hand2 wins!';
    } else if (hand1 == 'rock' && hand2 == 'rock'){
      return "It's a tie!";
    } else if (hand1 == 'paper' && hand2 == 'scissors'){
      return 'hand2 wins!';
    } else if (hand1 == 'paper' && hand2 == 'rock'){
      return 'hand1 wins!' ;
    } else if (hand1 == 'paper' && hand2 == 'paper'){
      return "It's a tie!";
    } else if (hand1 == 'scissors' && hand2 == 'scissors'){
      return "It's a tie!";
    } else if (hand1 == 'scissors' && hand2 == 'rock'){
      return 'hand2 wins!';
    } else if (hand1 =='scissors' && hand2 == 'paper'){
      return 'hand1 wins!';
    } else { 
        return 'Please enter rock, paper, or scissors'
    }
  }

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2) );
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
      assert.equal(rockPaperScissors('rock', 'paper'), "hand2 wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "hand2 wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "hand2 wins!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('paper', 'rock'), "hand1 wins!");
      assert.equal(rockPaperScissors('scissors', 'paper', ), "hand1 wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "hand1 wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "hand2 wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "hand2 wins!");
      assert.equal(rockPaperScissors('sCiSsOrs ', ' rOck  '), "hand2 wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors(' paper ', 'rOcK'), "hand1 wins!");
        assert.equal(rockPaperScissors('SCISSORS', 'Paper'), "hand1 wins!");
        assert.equal(rockPaperScissors(' rOck  ', 'sCiSsOrs '), "hand1 wins!");
    });
    it('should detect whether a user has correctly input their plays', () => {
        assert.equal(rockPaperScissors(' BANANA', 'rappleOcK'), 'Please enter rock, paper, or scissors');
    });
});
} else {

    getPrompt();
  
  }