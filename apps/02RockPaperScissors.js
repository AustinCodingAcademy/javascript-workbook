'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

// Start of the app
function rockPaperScissors(hand1, hand2) {

  // set hands to lower case in case the user decides to be 'that guy'
  hand1 = hand1.toLowerCase();
  hand2 = hand2.toLowerCase();

  // declare what happens if it is a tie between players
  // Make user type in rock, paper, scissors
  if (hand1 === hand2) {
    return "It's a tie!";
  }
  // continue with all other possibilities using the && to shorten the code
  else if ((hand1 === "rock") && (hand2 === "scissors")) {
    return "Hand one wins!";
  }
  else if ((hand1 === "rock") && (hand2 === "paper")) {
    return "Hand two wins!";
  }
  else if ((hand1 === "paper") && (hand2 === "scissors")) {
    return "Hand two wins!";
  }
  else if ((hand1 === "paper") && (hand2 === "rock")) {
    return "Hand one wins!";
  }
  else if ((hand1 === "scissors") && (hand2 === "paper")) {
    return "Hand one wins!";
  }
  else if ((hand1 === "scissors") && (hand2 === "rock")) {
    return "Hand two wins!";
  }
  else {
    return "Please input either rock, paper, or scissors";
  }
}



// console check
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
