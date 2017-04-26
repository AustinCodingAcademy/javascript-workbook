'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  // Write code here
if((hand1.toUpperCase() != "ROCK") &&
  (hand1.toUpperCase() != "PAPER") &&
  (hand1.toUpperCase() != "SCISSORS")){
    return "Hand was entered incorrectly, try again!";
  }
 if((hand2.toUpperCase() != "ROCK") &&
  (hand2.toUpperCase() != "PAPER") &&
  (hand2.toUpperCase() != "SCISSORS")){
    return "Hand was entered incorrectly, try again!";
}

  if(hand1.toUpperCase() === 'ROCK') {
    if(hand2.toUpperCase() === 'PAPER') {
      return "Hand two wins!";
    }
    if (hand2.toUpperCase() === 'SCISSORS') {
      return "hand one wins!";
    }
    else {
      return "It's a tie!";
    }
  }

if (hand1.toUpperCase() === 'PAPER') {
  if (hand2.toUpperCase() === 'ROCK') {
    return "Hand one wins!";
  }
  if (hand2.toUpperCase() ==='SCISSORS') {
    return "Hand two wins!";
  }
  else {
    return "It's a tie!";
  }
}

if (hand1.toUpperCase() === 'SCISSORS') {
  if (hand2.toUpperCase() === 'ROCK') {
    return "Hand two wins!";
  }
  if (hand2.toUpperCase() === 'PAPER') {
    return "Hand one wins!";
  }
  else {
    return "It's a tie!";
  }
}
}

Math.random()

function game(){
  const hands = ['ROCK', 'PAPER', 'SCISSORS'];
  for( var i = 0; i < 100; i++) {
    
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
