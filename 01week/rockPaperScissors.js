'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//ignore above, not relevent to function below

//don't need to define hand 1?
function rockPaperScissors(hand1, hand2) {
  console.log('Answer1: ' + hand1);
  console.log('Answer2: ' + hand2);

// Hand One wins
  if (hand1 === 'rock' && hand2 === 'scissors') {
    return(hand1 + 'wins!');
  }
  ||
  if (hand1 === 'scissors' && hand2 === 'paper'){
    return(hand1 + 'wins!');
  }
  ||
  if (hand1 === 'paper' && hand2 === 'rock'){
    return(hand1 + 'wins!');

//Hand Two Wins
  } else if (hand1 === 'rock' && hand2 === 'paper'){
    return(hand2 + 'wins!');
  }
    ||
    if (hand1 === 'scissors' && hand2 === 'rock'){
      return(hand2 + 'wins!');
    }
    ||
    if (hand1 === 'paper' && hand2 === 'scissors'){
      return(hand2 + 'wins!');
      //Tie Scenarios
    } else if (hand1 ==='paper' && hand2 ==='paper'){
      return('Tie!');
    }
    ||
    if (hand1 === 'scissors' && hand2 === 'scissors'){
      return('Tie!');
    }
    ||
    if (hand1 === 'rock' && hand2 === 'rock'){
      return('Tie!');
    } else{
      return('ERROR: Please type rock, paper, or scissors.');
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
