'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {


  if ((hand1 === 'rock' && hand2 === 'paper') ||
      (hand1 === 'paper' && hand2 === 'scissors') ||
      (hand1 === 'scissors' && hand2 === 'rock')
      ) {
    return 'Hand two wins!';
  }

  if ((hand1 === 'rock' && hand2 === 'scissors') ||
      (hand1 === 'paper' && hand2 === 'rock') ||
      (hand1 === 'scissors' && hand2 === 'paper')
      ) {
    return 'Hand one wins!';
  }

  if ((hand1 === 'rock' && hand2 === 'rock') ||
      (hand1 === 'paper' && hand2 === 'paper') ||
      (hand1 === 'scissors' && hand2 === 'scissors')
      ) {
    return "It's a tie!";
  }

}



function getPrompt() {
  rl.question('hand1: ', (answer1) => {

    const number = Math.random();

    let computerChoice = 'scissors';

    if (number <= .33) {
      computerChoice = 'rock';
    } else if (number <= .66) {
      computerChoice = 'paper';
    }


    console.log('hand2: ' + computerChoice);


    console.log( rockPaperScissors(answer1, computerChoice) );
    getPrompt();

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
