'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();
var validValues = ['rock', 'paper', 'scissors'];


function rockPaperScissors(hand1, hand2) {

  hand1 = hand1.toLowerCase();
  hand2 = hand2.toLowerCase();
  // Write code here
  // ===========================//

  if (validVal(hand1) && validVal(hand2)) {

    //remove outcomes from all possible outcomes
    if (hand1 === hand2) {
      return "it's a tie!";
    }
    //remove outcomes from all possible outcomes
    else if (hand1 === 'rock' && hand2 === 'scissors' || hand1 === 'scissors' && hand2 === 'paper' || hand1 === 'paper' && hand2 === 'rock') {
      return "hand 1 wins!";
    } else {
      return "hand2 wins!";
    }
  }

  // ===========================//
  else {
      var val ="";
      if ( !validVal(hand1) && !validVal(hand2) ){
        val=hand1+","+hand2;
      }
        else if( !validVal(hand1) ){
          val="Hand1: "+hand1;
        }

        else {
          val="Hand2: "+hand2;
        }
    return "invalid value: "+val+", try again";
    //SAY WHICH hand is invalid
    //try again with proper entries
  }
}

function validVal(hand) {
  //return true if hand is present
    //return false if hand is not present
      //boolean
  return(validValues.indexOf(hand) > -1);
}

function getPrompt() {
  prompt.get(['hand1', 'hand2'], function(error, result) {

    console.log(rockPaperScissors(result['hand1'], result['hand2']));

    getPrompt();
  });
}

// Tests

if (typeof describe !== 'undefined') {

  describe('#rockPaperScissors()', function() {
    it('should detect a tie', function() {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', function() {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
