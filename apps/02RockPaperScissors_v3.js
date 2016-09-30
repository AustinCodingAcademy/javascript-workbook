//Version 3. User now plays against the computer.

'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

console.log("-------------------------")
console.log("Rock, Paper, Scissors!");
console.log("-------------------------")
console.log('Type in your choice below to play against the computer:')

//We need user input for their choice
function getHand1Prompt() {
    prompt.get(['hand1'], function (error, result) {

        if (result.hand1 === 'rock' ||
        result.hand1 === 'paper' ||
        result.hand1 ==='scissors') {
          console.log(rockPaperScissors(result.hand1, getHand2()));
        }
        else {
          console.log('Invalid input. Choose rock, paper or scissors.')
          getHand1Prompt();
        }
    }); //end prompt.get()
} //end getHand1Prompt()

//Next we need to randomly generate a choice for the computer
function getHand2() {
  var compChoice = getRandomArbitrary(1,4);

  if (compChoice >= 1 && compChoice < 2) {
    console.log('Computer chooses rock')
    return 'rock';
  }
  else if (compChoice >= 2 && compChoice < 3) {
    console.log('Computer chooses paper')
    return 'paper';
  }
  else if (compChoice >= 3) {
    console.log('Computer chooses scissors')
    return 'scissors';
  }
  else {
    console.log('An error occurred with the compuer. Something is wrong.');
    return '';
  }

} //end getHand2()

//A random integer generator
function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min);
}

//Here we will determine the winner between the computer and user
function rockPaperScissors(hand1, hand2) {

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
        return "You win!";
      }

    // Next, we'll determine if hand2 is the winner:
    else {
        return "Computer wins!";
      }
} //end rockPaperScissors

getHand1Prompt();
