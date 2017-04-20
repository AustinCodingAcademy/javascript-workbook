'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var hand2 = Math.random();
console.log(hand2)
if (hand2 < .34) {
    hand2 = 'rock'
    console.log(hand2)
  } else if (hand2 > .66) {
    hand2 = 'scissors'
    console.log(hand2)
  } else {
    hand2 = 'paper'
    console.log(hand2)
  }

function rockPaperScissors(hand1, hand2) {
  if (hand1 !== 'rock' && hand1 !== 'paper' && hand1 !== 'scissors') {
    // Had to use && ^here^ instead of ||
  return 'Invalid entry.  Please enter rock, paper, or scissors.';
} else if ((hand1 === 'rock' && hand2 === 'rock') || (hand1 === 'scissors' && hand2
  === 'scissors') || (hand1 === 'paper' && hand2 === 'paper')) {
    return 'It\'s a tie!'
  } else if ((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'paper' &&
  hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'paper')) {
    return 'Hand one wins!'
  } else if ((hand1 === 'rock' && hand2 === 'paper') || (hand1 === 'paper' && hand2 === 'scissors') || (hand1 === 'scissors' && hand2 === 'rock'))
    return 'Hand two wins!'
  }



function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    // rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, hand2) );
      getPrompt();
    // });
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
