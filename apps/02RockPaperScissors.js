'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  //converts word to lower case
  var p1 = hand1.toLowerCase();
  var p2 = hand2.toLowerCase();

  //filters any answers that arent rock paper or scisossors out and anything spelt incorrectly
  if (p1 !=='rock' && p1 !== 'paper' && p1 !== 'scissors'){
    return 'Invalid entry player 1, please try again.';
  }
  if (p2 !=='rock' && p2 !== 'paper' && p2 !== 'scissors'){
    return 'Invalid entry player 2, please try again.';
  }
  //checks for tie
  if (p1 === p2){
    return "It's a tie!";
  }

  //checks all three options for p1 vs p2
  if (p1 === 'rock'){
    if (p2 === 'paper'){
      return 'Hand two wins!';
    }else {
      return 'Hand one wins!';
    }
  }
  if (p1 === 'paper'){
    if (p2 === 'rock'){
      return 'Hand one wins!';
    }else {
      return 'Hand two wins!';
    }
  }
  if (p1 === 'scissors'){
    if (p2 === 'paper'){
      return 'Hand one wins!';
    }else {
      return 'Hand two wins!';
    }
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