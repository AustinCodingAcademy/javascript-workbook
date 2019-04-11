'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  // Options: rock, paper or scissors
  // Hand1 chooses 1-3, this answer gets saved without whitespace to lower case
  // Hand2 chooses 1-3, this answer gets saved without whitespace to lower case
  // Compare the two answers
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
  // Tie returns 'It\'s a tie!'
  
  // console.log("It's a tie! ", hand1 == 'rock' && hand2 == 'rock')
  // console.log("It's a tie! ", hand1 == 'paper' && hand2 == 'paper')
  // console.log("It's a tie! ", hand1 == 'scissor' && hand2 == 'scissor')
  // console.log("Hand1 wins with Rock beating Scissors: ", hand1 == 'rock' && hand2 == 'scissor')
  // console.log("Hand2 wins with Rock beating Scissors: ", hand2 == 'rock' && hand1 == 'scissor')
  // console.log("Hand1 wins with Scissors beating Paper: ", hand1 == 'scissor' && hand2 == 'paper')
  // console.log("Hand2 wins with Scissors beating Paper: ", hand2 == 'scissor' && hand1 == 'paper')
  // console.log("Hand1 wins with Paper beating Rock: ", hand1 == 'paper' && hand2 == 'rock')
  // console.log("Hand2 wins with Paper beating Rock: ", hand2 == 'paper' && hand1 == 'rock')

function rockPaperScissors(hand1, hand2) {
  hand1 = hand1.trim().toLowerCase();
  hand2 = hand2.trim().toLowerCase();
  const valid = ['rock', 'paper', 'scissors'];
  if (hand1 == hand2) return 'It\'s a tie!';
  const wins = {
    'paper': 'rock',
    'scissors': 'paper',
    'rock': 'scissors'
  }
  if (valid.includes(hand1) && valid.includes(hand2)) {
    return wins[hand1] == hand2 ? 'Hand one wins!' : 'Hand two wins!';
  } else {
    getPrompt();
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
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('make sure guesses are only rock, paper or scissors', () => {
      assert.notEqual(rockPaperScissors('rock', 'rock'), "Guess again!");
      assert.notEqual(rockPaperScissors('paper', 'paper'), "Guess again!");
      assert.notEqual(rockPaperScissors('scissors', 'scissors'), "Guess again!");
    });
  });
} else {

  getPrompt();

}
