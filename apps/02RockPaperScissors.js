'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  // Hand one is just a variable that will just have the word Rock Paper or Scissor in it!

  //Spec 1 - If it's a tie, return "It's a tie!" It must be exactly "It's a tie!" for the tests to pass
  // Write code here


function rockPaperScissors(hand1, hand2) {
  if (hand1.toLowerCase() === hand2.toLowerCase()) {
  return "It's a tie!";
}

if (hand1.toLowerCase() === 'rock') {
  if (hand2.toLowerCase() === 'scissors') {
    return 'Hand one wins!';
  }
   if (hand2.toLowerCase() === 'paper') {
return 'Hand two wins!';
  }
}

if (hand1.toLowerCase() === 'paper') {
  if (hand2.toLowerCase() === 'scissors') {
    return 'Hand two wins!';
  }
   if (hand2.toLowerCase() === 'rock') {
  return 'Hand one wins!';
  }
}

if (hand1.toLowerCase() === 'scissors') {
  if (hand2.toLowerCase() === 'rock') {
    return 'Hand two wins!';
  }
   if (hand2.toLowerCase() === 'paper') {
  return 'Hand one wins!';
  }
}


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
