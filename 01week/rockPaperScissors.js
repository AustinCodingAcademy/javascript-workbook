'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var hand2 = Math.random();
console.log(hand2);
if (hand2 < 0.34) {
  hand2 = "rock";
}
else if (hand2 < 0.66) {
  hand2= "paper";
}
else {
  hand2 = "scissors";
} console.log("Computer: " + hand2);

function rockPaperScissors(hand1, hand2) {
  if (hand1 !== 'rock' && hand1 !== 'paper' && hand1 !== 'scissors') {
    return 'Not an option, please enter rock, paper, or scissors!';
  } else if (hand1 === hand2) {
    return 'It\'s a tie!';
  } else if (hand1 === 'rock') {
    if (hand2 === 'paper') {
      return 'Hand two wins!';
    } else {
      return 'Hand one wins!';
    }
  } else if (hand1 === 'paper') {
    if (hand2 === 'rock') {
      return 'Hand one wins!';
    } else {
      return 'Hand two wins!';
    }
  } else if (hand1 === 'scissors') {
    if (hand2 === 'rock') {
      return 'Hand two wins!';
    } else {
      return 'Hand one wins!'
    }
  }
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

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
