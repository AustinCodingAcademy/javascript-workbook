'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

//start the program by asking for hand1
getPromptHand1();

function getPromptHand1() {
  prompt.get(['hand1'], function (error, result) {

      var hand1 = result['hand1'];
      hand1 = hand1.toLowerCase();

      //if hand1 value is valid, ask for hand2
      if (hand1 === 'rock' || hand1 === 'paper' || hand1 === 'scissors') {
        getPromptHand2(hand1);
      }
      else {
        //if hand2 is not valid, ask them again.
        console.log('invalid input - please type rock, paper, or scissors');
        getPromptHand1();
      }
  });
}

  function getPromptHand2(hand1) {
    prompt.get(['hand2'], function (error, result) {

        var hand2 = result['hand2'];
        hand2 = hand2.toLowerCase();

        //if hand2 is valid, run the rockpaperscissors game
        if (hand2 === 'rock' || hand2 === 'paper' || hand2 === 'scissors') {
          console.log(rockPaperScissors(hand1, hand2));
          return;
        }
        else {
          //if hand2 is not valid, ask again
          console.log('invalid input - please type rock, paper, or scissors');
          getPromptHand2();
        }
    });
}


function rockPaperScissors(hand1, hand2) {

    if(hand1 === hand2) {
     return "It's a tie!";
   }

    if((hand1 === 'rock' && hand2 === 'scissors') ||
       (hand1 === 'paper' && hand2 === 'rock') ||
       (hand2 === 'scissors' && hand2 === 'paper')) {
      return "Hand one wins!";
    }
    else {
      return "Hand two wins";
    }

    return;

}
