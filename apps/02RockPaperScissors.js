'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


var computerChoice = function (low, high){
  return Math.floor(Math.random() * (high - low) + low);
};


var random1 = computerChoice(1, 3);
var random2 = computerChoice(1, 3);

function choiceRockPaperScissors(random){
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

console.log(choiceRockPaperScissors());

function rockPaperScissors(hand1, hand2){
    if( hand1 === null){
       hand1 = choiceRockPaperScissors(random1);
      console.log(hand1);
    }
    if (hand2 === null) {
      hand2 = choiceRockPaperScissors(random2);
      console.log(hand2);
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
    console.log(choiceRockPaperScissors(null, null));
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
