'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  // Write code here
  //var resultofexpression = conditionasboolean ? truepart: falsepart;
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();

  // var whichOne = ['rock':1,'paper':2, 'scissors':3]
  let winner = "Hand ";
  
  if (hand1==='rock'&&hand2==='scissors') {
    winner += "one" +" wins!";
  } else if (hand1==='rock'&&hand2==='paper') {
    winner += "two" +" wins!";
  } else if (hand1==='paper'&&hand2==='rock') {
    winner += "one" +" wins!";
  } else if (hand1==='paper'&&hand2==='scissors') {
    winner += "two" +" wins!";
  } else if (hand1==='scissors'&&hand2==='paper') {
    winner += "one" +" wins!";
  } else if (hand1===3&&hand2==='rock') {
    winner += "two" +" wins!";
  } else {
    winner = "It's a tie!"; 
  }


  return winner;
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
