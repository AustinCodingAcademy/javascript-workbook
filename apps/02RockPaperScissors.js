'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function rockPaperScissors(hand1, hand2) {
    // Write code here
    //Scrubs your data
      hand1 = hand1.toLowerCase();
      hand2 = hand2.toLowerCase();
    //Logic
      if (hand1 === hand2) {
        return "It's a tie!";
      }
      if (hand1 === 'rock') {
        if (hand2 === 'scissors') {
          return 'Rock wins. Hand one wins!';
        }
        // If we reach here, player 2 must have dealt paper
        return 'Hand two wins! = Paper';
      }
      if (hand1 === 'paper') {
        // fill this in using the logic above
        if (hand2 === 'rock') {
            return 'Hand 1 wins! = Paper';
          }
        return 'Hand 2 wins = Scissors';
      }
      if (hand1 === 'scissors') {
        // fill this in using the logic above
        if (hand2 === 'paper') {
          return 'Hand 1 wins = Scissors';
        }
        return 'Hand 2 wins = Rock';
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
