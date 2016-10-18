'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

 
  // Removed this check since we don't have a test to check whether the input was lowercase.

  // Added a test to check whether you entered an invalid choice. 
  
  // var hand1 = hand1.toLowerCase();
  // var hand2 = hand2.toLowerCase(); 

  
  var game = hand1 && hand2;

  if (game !== "rock" && game !== "scissors" && game !== "paper") {
    return "Enter a real hand dood!";
  } else if (hand1 === hand2) {
    return "It's a tie!";
  }

  if (hand1 === "rock") {
    if (hand2 === "paper") {
      return "Hand two wins!"
    } else if (hand2 === "scissors") {
      return "Hand one wins!"
    }
  } 

  if (hand1 === "paper") {
    if (hand2 === "scissors") {
      return "Hand two wins!"
    } else if (hand2 === "rock") {
      return "Hand one wins"
    }
  }

  if (hand1 === "scissors") {
    if (hand2 === "rock") {
      return "Hand two wins!"
    } else if (hand2 === "paper") {
      return "Hand one wins!"
    }
  }
}

rockPaperScissors('rock', 'scissors')
rockPaperScissors('rock', 'rock');

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

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
    it('should detect if an invalid input is entered', function() {
      assert.equal(rockPaperScissors(!'rock', !'rock'), "Enter a real hand dood!");
      assert.equal(rockPaperScissors(!'paper', !'paper'), "Enter a real hand dood!")
      assert.equal(rockPaperScissors(!'scissors', !'scissors'), "Enter a real hand dood!")
    })
  });
} else {

  getPrompt();

}
