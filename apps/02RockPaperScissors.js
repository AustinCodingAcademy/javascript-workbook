'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* This function determines which hand will win in a game of Rock, Paper, Scissors based off of predetermined conditions */


function rockPaperScissors(hand1, hand2) {

  hand1 = hand1.toLowerCase();
  hand2 = hand2.toLowerCase();

// Tie
  if (hand1 === hand2) {
    return "It\'s a tie!";
  } 

// Rock
  if (hand1 === 'rock') {
    if (hand2 === 'scissors') {
      return 'Hand one wins!';
    }
    if (hand2 === 'paper') {
      return 'Hand two wins!';
    }
  }

// Paper
  if (hand1 === 'paper') {
    if (hand2 === 'rock') {
      return 'Hand one wins!';
    }
    if (hand2 === 'scissors') {
      return 'Hand two wins!';
    }
  }

// Scissors
  if (hand1 === 'scissors') {
    if (hand2 === 'paper') {
      return 'Hand one wins!';
    }
    if (hand2 === 'rock') {
      return 'Hand two wins!';
    }
  }
}

// Tests
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

  describe('#rockPaperScissors()', function () {
    it('should detect a tie', function () {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', function () {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
