'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here

  //First, check for ties
  if (hand1===hand2) {
    return "Tie"
  }

  //Next, check for Hand 1 wins
  else if (hand1==='rock' && hand2==='sciccors'){
    return "Hand 1 wins"
  }
  else if(hand1==='paper' && hand2==='rock'){
    return "Hand 1 wins"
  }
  else if(hand1==='sciccors' && hand2==='paper'){
    return "Hand 1 wins"
  }

  //Now, check for Hand 2 wins
  else if (hand1==='rock' && hand2==='paper'){
    return "Hand 2 wins"
  }
  else if(hand1==='paper' && hand2==='scissors'){
    return "Hand 2 wins"
  }
  else if(hand1==='scissors' && hand2==='rock'){
    return "Hand 2 wins"
  }

  //If none of of the above returns pass, display an error
  else {
    return "Error! Accepted inputs are: rock, paper, scissors"
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
