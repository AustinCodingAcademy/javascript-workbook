'use strict';
// change made
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




const rockPaperScissors = (hand1, hand2) => {

  hand1 = hand1.toLowerCase().trim()
  hand2 = hand2.toLowerCase().trim();
  const choices = ['rock', 'paper', 'scissors'];
  const a = choices.indexOf(hand1);
  const b = choices.indexOf(hand2);
  const wins = ["Hand one wins!", "Hand two wins!", "It's a tie!"];

  if (a !== -1 && b !== -1) {
    if (hand1 === hand2) {
      return wins[2];
    } else if (hand1 === 'rock' && hand2 === 'scissors') {
      return wins[0];
    } else if (hand1 === 'paper' && hand2 === 'rock') {
      return wins[0];
    } else if (hand1 === 'scissors' && hand2 === 'paper') {
      return wins[0];
    } else {
      return wins[1];
    }
  } else {
    return "Please enter rock,paper, or scissors";
  }
};

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
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
  });
} else {

  getPrompt();

}
