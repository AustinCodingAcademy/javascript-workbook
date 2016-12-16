'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();



function rockPaperScissors(hand1, hand2) {

    hand1 = hand1.toLowerCase();
    hand2 = hand2.toLowerCase();
    hand1 = hand1.trim();
    hand2 = hand2.trim();

    var handWin1 = 'Hand one wins!';
    var handWin2 = 'Hand two wins!';
    var handTie = "It's a tie!";

    if (hand1 === hand2) {
        return handTie;
    } else if (hand1 === 'rock' && hand2 === 'scissors') {
        return handWin1;
    } else if (hand1 === 'rock' && hand2 === 'paper') {
        return handWin2;
    } else if (hand1 === 'scissors' && hand2 === 'paper') {
        return handWin1;
    } else if (hand1 === 'scissors' && hand2 === 'rock') {
        return handWin2;
    } else if (hand1 === 'paper' && hand2 === 'rock') {
        return handWin1;
    } else if (hand1 === 'paper' && hand2 === 'scissors') {
        return handWin2;
    } else {
        return ('Invalid Input! Please enter rock, paper, or scissors to continue');
    }
}


function getPrompt() {
    prompt.get(['hand1', 'hand2'], function(error, result) {

        console.log(rockPaperScissors(result['hand1'], result['hand2']));

        getPrompt();
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
