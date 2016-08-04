'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function rockPaperScissors(hand1, hand2) {

    console.log(hand1, hand2);

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

}

getPromptHand1();

function getPromptHand1() {
  prompt.get(['hand1'], function (error, result) {

      var hand1 = result['hand1'];
      hand1 = hand1.toLowerCase();

      if (hand1 === 'rock' || hand1 === 'paper' || hand1 === 'scissors') {
        getPromptHand2(hand1);
      }
      else {
        getPromptHand1();
      }
  });
}

  function getPromptHand2(hand1, callback) {
    prompt.get(['hand2'], function (error, result) {

        var hand2 = result['hand2'];
        hand2 = hand2.toLowerCase();

        if (hand2 === 'rock' || hand2 === 'paper' || hand2 === 'scissors') {
          //getPrompt(hand1, hand2);
          //console.log(hand1, hand2);
          console.log(rockPaperScissors(hand1, hand2));
        }
        else
          getPromptHand2();
        }
    );
}



// Tests

// if (typeof describe !== 'undefined') {
//
//     describe('#rockPaperScissors()', function () {
//         it('should detect a tie', function () {
//             assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
//             assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
//             assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
//         });
//         it('should detect which hand won', function () {
//             assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
//             assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
//             assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
//         });
//     });
// } else {
//
//     getPrompt();
//
// }
