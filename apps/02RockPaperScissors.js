'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function rockPaperScissors(hand1, hand2) {
  hand1=hand1.toLowerCase();
  hand2=hand2.toLowerCase();
  if ( (hand1 === "rock" && hand2 === "rock") || (hand1 === "paper" && hand2 === "paper") ||  (hand1 === "scissors" && hand2 === "scissors") ){
    return "It's a tie!";
  }
  else if( (hand1 === "scissors" && hand2 === "rock") || (hand1 === "paper" && hand2 === "scissors") || (hand1 === "rock" && hand2 === "paper") ){
     return "Hand two wins!";
  }
  else if( (hand1 === "scissors" && hand2 === "paper") || (hand1 === "paper" && hand2 === "rock") ||  (hand1 === "rock" && hand2 === "scissors") ){
     return "Hand one wins!";
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
