'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  hand1 = hand1.toLowerCase();
  hand2 = hand2.toLowerCase();

  var allowedWords = ['rock', 'paper', 'scissors'];
  if (allowedWords.indexOf(hand1) < 0 || allowedWords.indexOf(hand2) < 0) {
    return 'Invalid input';
  }

  if (hand1 === hand2) {
    return "It's a tie!";
  }

  if (hand1 === 'rock') {
    if (hand2 === 'scissors') {
      return 'Hand one wins!';
    }
    return 'Hand two wins!';
  }

  if (hand1 === 'paper') {
    if (hand2 === 'rock') {
      return 'Hand one wins!';
    }
    return 'Hand two wins!';
  }

  if (hand1 === 'scissors') {
    if (hand2 === 'paper') {
      return 'Hand one wins!';
    }
    return 'Hand two wins!';
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      //console.log( rockPaperScissors(answer1, answer2) );
      var output = rockPaperScissors(answer1, answer2);
      if (output === "It's a tie!" || output === "Invalid input") {
        console.log(output);
        getPrompt();
      } else {
        console.log(output);
        process.exit();
      }
      //getPrompt();
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
    it('should scrub input', function () {
      assert.equal(rockPaperScissors('RocK', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'PAPER'), "Hand one wins!");
      assert.equal(rockPaperScissors('RoCk', 'papER'), "Hand two wins!");
    });
    it('should validate input', function () {
      assert.equal(rockPaperScissors('dog', 'cat'), "Invalid input");
      assert.equal(rockPaperScissors('paper', 'mouse'), "Invalid input");
      assert.equal(rockPaperScissors('horse', 'scissors'), "Invalid input");
    });
  });
} else {

  getPrompt();

}
