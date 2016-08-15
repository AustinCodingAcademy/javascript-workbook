'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function rockPaperScissors(hand1, hand2) {

    // // Write code here
    var options = ["rock", "scissors", "paper"];
    var compute_option = Math.floor( Math.random() * 3 );
    // other option, if (Math.random() < .5) ? "Option1" "Option2";

    hand1 = hand1.toLowerCase().trim();
    hand2 = hand2.toLowerCase().trim();

    if ( !(options.indexOf(hand1) > -1) ) {
      return "Hand One, Please Enter a correct value: rock, scissors or paper";
    }
    if ( !(options.indexOf(hand2) > -1) ) {
      return "Hand Two, Please Enter a correct value: rock, scissors or paper";
    }

    // if !(hand1 = options[0] || hand1 = options[1] || hand1 = options[2] ) {
    //   return "Please Enter a correct value: rock, scissors or paper";
    // }


    if (hand1 === hand2){
      return "It's a tie!";
    }

    if ( (hand1 === 'rock' &&  hand2 === 'scissors') ||
       (hand1 === 'paper' &&  hand2 === 'rock') ||
       (hand1 === 'scissors' &&  hand2 === 'paper') )
       {
      return "Hand one wins!";
    } else {
      return "Hand two wins!";
    }


    // FIRST TRY
    // if (hand1 === 'rock'){
    //   if (hand2 === 'scissors'){
    //     return "Hand one wins!";
    //   }
    // }
    // if (hand1 === 'paper'){
    //   if (hand2 === 'rock'){
    //     return "Hand one wins!";
    //   }
    // }
    // if (hand1 === 'scissors'){
    //   if (hand2 === 'paper'){
    //     return "Hand one wins!";
    //   }
    // }
    //
    // return "Hand two wins!";

}

function getPrompt() {
    prompt.get(['hand1', 'hand2'], function (error, result) {

        console.log( rockPaperScissors(result['hand1'], result['hand2']) );

        getPrompt();
    });
}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// function getPrompHand1() {
//   prompt.get(['hand1']), function (error, result) {
//
//     var options = ["rock", "scissors", "paper"];
//
//     var hand1 = result[hand1];
//     hand1 = hand1.toLowerCase().trim();
//
//     if ( !(options.indexOf(hand1) > -1) ) {
//       return "Hand One, Please Enter a correct value: rock, scissors or paper";
//       getPrompHand1();
//     } else {
//       console.log( rockPaperScissors(result['hand1'], result['hand2']) );
//     }
//
//   };
// }

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
