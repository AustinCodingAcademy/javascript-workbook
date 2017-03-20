'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  //Write code here
  //take it for granted that the variable hand1 will have whatever value the user types in at the prompt "hand1:"
  //take it for granted that the variable hand2 will have whatever value the user types in at the prompt "hand2:"
  //after the user types in a value for hand2 and hits the enter key, the computer will execute line 12 so start your first line of code there

  /**
   * Spec 1 - If it's a tie, return "It's a tie!"
   * It must be exactly "It's a tie!" for the tests to pass
   */   
  // this says "if" so obviously i need to use an if statement
  //how do you check for a tie that will result in a true or false
  if(){
    //i don't know what return "Its's a tie!" means
    //but this part of the spec is in gray highlight which means to copy and paste this literally directly into the code
    return "Its's a tie!"
  }
   
   
  //O, look at this. I was given most of the code exactly as it should be. how nice of ACA
  if (hand1 === hand2) {
    return "It's a tie!";
  }

  if (hand1 === 'rock') {
    if (hand2 === 'scissors') {
      return 'Hand one wins!';
    }
    // If we reach here, player 2 must have dealt paper
    return 'Hand two wins!';
  }

  if (hand1 === 'paper') {
    // fill this in using the logic above

  }

  if (hand1 === 'scissors') {
    // fill this in using the logic above  

  }









//do not write any code below this line and do not remove this curly brace
}


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
  });
} else {

  getPrompt();

}
