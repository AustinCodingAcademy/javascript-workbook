'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function rockPaperScissors(hand1, hand2) {
  var first = hand1.toLowerCase();
  var second = hand2.toLowerCase();

  if (first === second) {
    return "It's a tie!";
  }

  if (first === 'rock') {
    if (second === 'scissors') {
      return 'Hand one wins!';
    }
    else {
      return 'Hand two wins!';
    }
  }

  if (first === 'paper') {
    if (second === 'scissors') {
      return 'Hand two wins!';
    }
    else {
      return 'Hand one wins!'
    }
  }

  if (first === 'scissors') {
    if (second === 'paper') {
      return 'Hand one wins!'
    }
    else  {
      return 'Hand two wins!'
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
