'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

function rockPaperScissors(hand1, hand2) {

    function randomInt(low, high){
      return Math.floor(Math.random() * (high-low) + low);
    };

    if (hand1 == '' || hand2 == '') {
      
      if(hand1 == "") {
        hand1 = randomInt(1,100);
        console.log("Hand 1: " + hand1);

        if(hand1 < 33) {
          
          hand1 = "rock";
          console.log("Hand 1: " + hand1);

        } else if (hand1 <= 66){
          
          hand1 = "scissors";
          console.log("Hand 1: " + hand1);

        } else if(hand1 <= 100){ 
          
          hand1 = "paper";
          console.log("Hand 1: " + hand1);

        }
      } else if (hand2 == "") {
        hand2 = randomInt(1,100);
        console.log("Hand 1: " + hand2);

        if(hand2 < 33) {
          
          hand2 = "rock";
          console.log("Hand 1: " + hand2);

        } else if (hand2 <= 66){
          
          hand2 = "scissors";
          console.log("Hand 1: " + hand2);

        } else if(hand2 <= 100){ n
          
          hand2 = "paper";
          console.log("Hand 1: " + hand2);

        }
      }
    }

    hand1 = hand1.toLowerCase();
    hand2 = hand2.toLowerCase();

    if (hand1 === hand2) {
      
      return "It's a tie!";

    } else if (hand1 === 'rock') {
      
      if (hand2 === 'scissors') {
        return 'Hand one wins!';
      }
      return 'Hand two wins!';

    } else if (hand1 === 'paper') {
      
      if (hand2 === 'scissors') {
        return 'Hand two wins!';
      }
      return 'Hand one wins!';

    } else if (hand1 === 'scissors') {
      
      if (hand2 === 'rock') {
        return 'Hand two wins!';
      }
      return 'Hand one wins!';

    } else {

      console.log("Try again...");

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