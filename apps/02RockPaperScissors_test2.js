'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


getPrompt();


function getPrompt() {

    //does the person want to play against someone else, or the computer?
    prompt.get(['enter [1] for human vs human OR enter [2] for human vs computer'], function (error, result) {

      var playerType = result['enter [1] for human vs human OR enter [2] for human vs computer'];

      //continue if they enter 1 or 2
      if(playerType === '1' || playerType === '2') {
        getPromptHand1(playerType);
      }
      //throw an error if they do not enter 1 or 2
      else {
        console.log('invalid input.  please enter 1 or 2');
        getPrompt();
      }

    });

}

function getPromptHand1(playerType) {

  //always allow hand1 to be entered
  prompt.get(['hand1'], function (error, result) {

      var hand1 = result['hand1'];
      hand1 = hand1.toLowerCase();


      if (hand1 === 'rock' || hand1 === 'paper' || hand1 === 'scissors') {

          //if it is human vs human, then continue to ask for hand2
          if(playerType === '1') {
            getPromptHand2(hand1);
          }

          //if it is human vs computer, then run the computer function
          else {
            computer(hand1);
          }

      }
      else {
        console.log('invalid input - please type rock, paper, or scissors');
        getPromptHand1();
      }
  });
}

  function getPromptHand2(hand1) {
    prompt.get(['hand2'], function (error, result) {

        var hand2 = result['hand2'];
        hand2 = hand2.toLowerCase();

        //if hand2 is valid, then run the rockpaperscissors app
        if (hand2 === 'rock' || hand2 === 'paper' || hand2 === 'scissors') {
        console.log(rockPaperScissors(hand1, hand2));
        //stop the hand2 loop
        return rockPaperScissors;
        }
        // if hand2 is not valid, have them do it again
        else
          console.log('invalid input - please type rock, paper, or scissors');
          getPromptHand2();
        }
    );
}


//randomize the computer's response
function computer(hand1) {

  var randomHand = Math.floor((Math.random() * 3) + 1);
  var hand2 = '';

  if(randomHand === 1)
    {
      hand2 = 'rock';
      console.log('Computer Hand:  ' + hand2);
    }
    else if(randomHand === 2) {
      hand2 = 'paper';
      console.log('Computer Hand:  ' + hand2);
    }
    else {
      hand2 = 'scissors';
      console.log('Computer Hand:  ' + hand2);
    }

    console.log(rockPaperScissors(hand1, hand2));

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

}
