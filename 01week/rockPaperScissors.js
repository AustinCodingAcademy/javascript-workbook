'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  let h1lc= hand1.toLowerCase().trim();
  let h2lc= hand2.toLowerCase().trim();
  // Write code here

    if (h1lc===h2lc) {
      return "It's a tie!";
    } else if (h1lc=== 'rock' && h2lc==='scissors'){
      return 'Hand one wins!';
    }
    else if (h1lc==="rock" && h2lc==='paper'){
      return 'Hand two wins!'
    } else if (h1lc==="paper" && h2lc==='rock'){
      return 'Hand 1 wins'
    } else if (h1lc==='paper' && h2lc==='scissors'){
      return 'Hand two wins!'
    } else if (h1lc==='scissors' && h2lc==='paper'){
      return 'hand 1 wins'
    } else if (h1lc==='scissors' && h2lc==='rock'){
      return 'hand 2 wins'
    } else {
      return 'invalid input'
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
