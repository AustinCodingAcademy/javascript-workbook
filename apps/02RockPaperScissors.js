'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var hand1Wins = "Hand one wins!";
var hand2Wins = "Hand two wins!"
function rockPaperScissors(hand1, hand2) {

    // Write code here
    // If this statement is true, the code reader quits reading the code.
    if (hand1 === hand2) {
      return "It's a tie!"
    }

    if (hand1 === "rock") {
      // Since hand1 === rock, we need to figure out all the other options for hand2
      if (hand2 === "scissors") {
        return hand1Wins
      } else if (hand2 === "paper") {
        return hand2Wins
      }

    } else if (hand1 === "scissors") {
      if (hand2 === "rock") {
        return hand2Wins
          }
        else if (hand2 === "paper") {
          return hand1Wins
        }
      }
      if (hand1 === "paper") {
        if (hand2 === "rock") {
          return hand1Wins
        }
        else if (hand2 === "scissors") {
          return hand2Wins
        }
      }
    // Here you need to write a statement in case the user doesn't enter a valid response.
    
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
