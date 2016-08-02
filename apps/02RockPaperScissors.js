'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function rockPaperScissors(hand1, hand2) {

    // Spec 3: Input scrubbing
    // We're going to change the inputs to lower case.
    hand1.toLowerCase();
    hand2.toLowerCase();

    // Spec 1: Is it a tie?
    if (hand1 === hand2) {
      return "It's a tie!";
    }
    // Now that we know it's not a tie:
    // Spec 2: Who is the winner?
    // First we'll determine the winner if hand1 is rock.
    else  if (hand1 === 'rock'){
      if (hand2 === 'scissors') {
        return "Hand one wins!";
      }
      // We already know the other hand isn't rock, otherwise it would be
      // a tie. Therefore, the other hand must be paper.
      else {
        return "Hand two wins!";
      }
    }
    // Next, we'll determine the winner if hand1 is paper.
    else if(hand1 === 'paper') {
      if (hand2 === 'rock') {
        return "Hand one wins!";
      }
      else {
        return "Hand two wins!";
      }
    }
    // Next, we'll determine the winner if hand1 is scissors.
    else if (hand1 === 'scissors'){
      if (hand2 === 'paper') {
        return "Hand one wins!";
      }
      else {
        return "Hand two wins!";
      }
    }
    // Finally, if we get to this point, the user must have input something
    // invalid. We'll let them know.
    else {
      return "Hey user. You suck. Your inputs need to be rock, paper or scissors!";
    }

}

//We need user input for hand1 & hand2
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
