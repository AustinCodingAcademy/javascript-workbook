'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function rockPaperScissors(hand1, hand2) {


hand1 = hand1.toLowerCase();
hand2 = hand2.toLowerCase();



  if (hand1 === hand2) {
    return "It's a tie!";
    }

    if (hand1 === 'rock') {
      if (hand2 === 'scissors') {
        return 'Hand one wins!';
        }
      else {
        return 'Hand two wins!';
      }
    // If we reach here, player 2 must have dealt paper
    return 'Hand two wins!';
    }

    if (hand1 === 'paper') {
      if (hand2 === 'scissors'){
        return 'Hand two wins!';
      }
      else {
        return 'Hand one wins!';
      }
    }

    if (hand1 === 'scissors') {
      if (hand2 === 'paper'){
        return 'Hand one wins!';
      }
      else {
        return 'Hand two wins!';
      }
    }

}

//function rockPaperScissors (hand1, hand2){
//  if hand1 === hand2{
//       return 'its a tie';
//      }
//  if (hand1 ==='rock'&& hand2 === 'paper'){
//      return 'hand 2 wins';
//     }
//     else {
//       return 'hand 1 wins';
//     }
//  if ('paper', 'rock') {
//      return 'hand 1 wins';
//     }
//  else {
//      return 'hand 2 wins';
//     }
// if ('scissors', 'rock') {
//   return 'hand 2 wins';
//    }
// else {
//   return 'hand 1 wins';
//   }
//}




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
