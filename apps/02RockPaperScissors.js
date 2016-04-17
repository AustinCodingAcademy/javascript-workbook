'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

// solution 1

// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);

// function rockPaperScissors(hand1, hand2){
//     if(hand1 == hand2){
//         return "It's a tie!";
//     }
//     else if (hand1 === "rock"){
//         if(hand2 == "scissors"){
//             return "Hand one wins!";
//         }
//         else {
//             return "Hand two wins!";
//         }
//     }
//     else if (hand1 === "paper"){
//         if(hand2 === "rock"){
//             return "Hand one wins!";   
//         }
//         else {
//             return "Hand two wins!";
//         }
//     }
//     else if (hand1 === "scissors"){
//         if(hand2 === "rock"){
//             return "Hand one wins!";
//         }
//         else {
//             return "Hand two wins!"; 
//         }
//     }
// }

// Solution 2

var computerChoice = function (low, high){
  return Math.floor(Math.random() * (high - low) + low);
};

var random1 = computerChoice(1, 3);
var random2 = computerChoice(1, 3);

function choiceRockPaperScissors(random1, random2){
    if(random1 === 1){
       return  "rock";
    } 
    else if (random2 === 2){
      return  "paper";
    }
    else {
       return "scissors";
    }
}

//  console.log(choiceRockPaperScissors(random1, random2));

function rockPaperScissors(hand1, hand2){
    if( hand1 === null){
       hand1 = choiceRockPaperScissors(random1);
      
    }
    if (hand2 === null) {
      hand2 = choiceRockPaperScissors(random2);
      
    }
  
  if( hand1 === hand2){
    return "It's a tie!";
  }
  else if(hand1 === "rock" && hand2 === "paper"){
          return "Hand two wins!";
        }
  else if(hand1 === "rock" && hand2 === "scissors") {
          return "Hand one wins!";
        }
  
  
  else if(hand1 === "paper" && hand2 === "rock") {
          return "Hand one wins!";
        }
  else if(hand1 === "paper" && hand2 === "scissors") {
          return "Hand two wins!";
        }
  
  
  else if(hand1 === "scissors" && hand2 === "paper") {
          return "Hand one wins!";
        }
  else if(hand1 === "scissors" && hand2 === "rock") {
          return "Hand two wins!";
        } 
}
rockPaperScissors(null, null);

// Solution 3
function computerChoice(low, high){
  return Math.floor(Math.random() * (high - low) + low);
}

function choiceRockPaperScissors(random){
   random = computerChoice(1,4);

    if(random === 1){
       return  "rock";
    } 
    else if (random === 2){
      return  "paper";
    }
    else {
       return "scissors";
    }
  return choiceRockPaperScissors();
}

function rockPaperScissors(hand1, hand2){
  
  hand1 = choiceRockPaperScissors();
  hand2 = choiceRockPaperScissors();

  if( hand1 === hand2){
    return "it's a tie!";
  }
  else if(hand1 === "rock" && hand2 === "paper"){
          return "hand2 wins";
        }
  else if(hand1 === "rock" && hand2 === "scissors") {
          return "hand1 wins";
        }
  
  
  else if(hand1 === "paper" && hand2 === "rock") {
          return "hand1 wins";
        }
  else if(hand1 === "paper" && hand2 === "scissors") {
          return "hand2 wins";
        }
  
  
  else if(hand1 === "scissors" && hand2 === "paper") {
          return "hand1 wins";
        }
  else if(hand1 === "scissors" && hand2 === "rock") {
          return "hand2 wins";
        }
}
 console.log(rockPaperScissors());

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
