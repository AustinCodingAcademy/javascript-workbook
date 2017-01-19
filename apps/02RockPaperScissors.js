'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// hand1 and hand2 are variables that will take the values: 'rock', 'paper', or 'scissors'.
function rockPaperScissors(hand1, hand2) {
  if(hand1.toLowerCase() !== 'rock' || 'paper' || 'scissors') {
    return "Could not recognize input. Please enter either 'rock', 'paper', or 'scissors'.";
  }
    else if(hand2.toLowerCase() !== 'rock' || 'paper' || 'scissors') {
    return "Could not recognize input. Please enter either 'rock', 'paper', or 'scissors'.";
  };

  if(hand1.toLowerCase() === hand2.toLowerCase()) {
    return "It's a tie!";
  }
  if(hand1.toLowerCase() === 'rock') {
    if(hand2.toLowerCase() === 'scissors') {
      return 'Hand one wins!';
    }
    else if(hand2.toLowerCase() === 'paper') {
      return 'Hand two wins!';
    }
    else {
      return "Could not recognize input. Please enter either 'rock', 'paper', or 'scissors'.";
    }
  };

  if(hand1.toLowerCase() === 'paper') {
    if(hand2.toLowerCase() === 'rock') {
      return 'Hand one wins!';
    }
    else if(hand2.toLowerCase() === 'scissors') {
      return 'Hand two wins!';
    }
    else {
      return "Could not recognize input. Please enter either 'rock', 'paper', or 'scissors'.";
    }
  };

  

  if(hand1.toLowerCase() === 'scissors') {
    if(hand2.toLowerCase() === 'paper') {
      return 'Hand one wins!';
    }
    else if(hand2.toLowerCase() === 'rock') {
      return 'Hand two wins!';
    }
    else {
      return "Could not recognize input. Please enter either 'rock', 'paper', or 'scissors.";
    }
  };
};

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
