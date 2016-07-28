'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function rockPaperScissors(hand1, hand2) {

  var handOne = hand1.toLowerCase();
  var handTwo = hand2.toLowerCase();

    // Write code here
    if (handOne === handTwo) {
      return "It's a tie!";
    }

    if (handOne === 'rock') {
        if (handTwo === 'scissors') {
          return 'Hand one wins!';
        }
        // If we reach here, player 2 must have dealt paper
        return 'Hand two wins!';
    }

    if (handOne === 'paper') {
      if (handTwo === 'rock') {
        return 'Hand one wins!';
      }
      // If we reach here, player 2 must have dealt scissors
      return 'Hand two wins!';
    }

    if (handOne === 'scissors') {
      // fill this in using the logic above
      if (handTwo === 'paper') {
        return 'Hand one wins!';
      }
      // If we reach here, player 2 must have dealt rock
      return 'Hand two wins!';
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
