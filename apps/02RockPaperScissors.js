'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function rockPaperScissors(hand1, hand2) {

    // Write code here
hand1 = hand1.toLowerCase();
hand2 = hand2.toLowerCase();

// Invalid code!
// if (hand1 !== 'rock','paper','scissors' || hand2 !== 'rock','paper','scissors') {
//   return 'Does not compute! Use "rock", "paper", or "scissors" only.';
// };

// Valid input tester
if (hand1 !== 'rock' && hand1 !== 'paper' && hand1 !== 'scissors') {
  return 'Does not compute! Use "rock", "paper", or "scissors" only.';
} else if (hand2 !== 'rock' && hand2 !== 'paper' && hand2 !== 'scissors') {
  return 'Does not compute! Use "rock", "paper", or "scissors" only.';
} else {

// Remainer of function
if (hand1 === hand2) {
  return "It's a tie!";
}
if (hand1 === 'rock'){
  if (hand2 === 'scissors') {
    return "Hand one wins!";
  }
  return "Hand two wins!";
}

if (hand1 === 'scissors'){
  if (hand2 === 'paper') {
    return "Hand one wins!";
  }
  return "Hand two wins!";
}

if (hand1 === 'paper'){
  if (hand2 === 'rock'){
    return "Hand one wins!";
  }
  return "Hand two wins!";
}


}

}


function getPrompt() {
    prompt.get(['hand1', 'hand2'], function (error, result) {

        console.log( rockPaperScissors(result['hand1'], result['hand2']) );

        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

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
