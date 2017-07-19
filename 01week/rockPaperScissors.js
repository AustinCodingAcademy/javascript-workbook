'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  console.log('hand1 is ' + hand1);
  console.log('hand2 is ' + hand2);
  if (hand1 === hand2) {
    return 'it\'s a tie';
  } else if (hand1 === 'rock') {
    if (hand2 === 'scissors') {
      return 'player 1 won';
    } else if (hand2 === 'paper') {
      return 'player 2 won';
    }
  } else if (hand1 === 'paper') {
    if (hand2 === 'rock') {
      return 'player 1 won';
    } else if (hand2 === 'scissors') {
      return 'player 2 won';
    }
  } else if (hand1 === 'scissors') {
    if (hand2 === 'paper') {
      return 'player 1 won';
    } else if (hand2 === 'rock') {
      return 'player 2 won';
    }
  }
}

function computerChoice() {
  var choice = Math.floor((Math.random() * 3) + 1);
  if (choice === 1) {
    return 'rock';
  } else if (choice === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    console.log(rockPaperScissors(answer1, computerChoice()));
    getPrompt();
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
