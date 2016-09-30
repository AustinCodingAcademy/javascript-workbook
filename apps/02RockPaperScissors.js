//Version 2. Consolidated the logic to test if hand1 or hand2 wins.

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
    // First we'll determine if hand1 is the winner:
    else  if ( (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')) {
        return "Hand one wins!";
      }

    // Next, we'll determine if hand2 is the winner:
    else {
        return "Hand two wins!";
      }
} //end rockPaperScissors

//We need user input for hand1 & hand2
function getPrompt() {
    prompt.get(['Enter a value for hand1'], function (error, result) {

        console.log( rockPaperScissors(result['hand1'], "paper") );

        //getPrompt();
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
