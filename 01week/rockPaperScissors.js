'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  // Write code here
  if (isValid(hand1, hand2)) {
    if (hand1 === hand2) return 'It\'s a tie!'
    if (hand1 === 'rock') {
      return ((hand2 === 'paper') ? 'Computer wins!' : 'You win!');
    } else if (hand1 === 'paper') {
      return ((hand2 === 'rock') ? 'You win!' : 'Computer wins!');
    } else if (hand1 === 'scissors') {
      return ((hand2 === 'paper') ? 'You win!' : 'Compputer wins!');
    }
  } else {
    return 'You must type paper, rock, or scissors. You typed- ' + hand1 + ' ' + hand2;
  }
}

//Verify answers
function isValid(test1, test2) {
  var temp = [ 'rock', 'paper', 'scissors', 'ROCK', 'PAPER', 'SCISSORS', 'Rock', 'Paper', 'Scissors' ];
  return (temp.includes(test1) && temp.includes(test2));
}

function computerpick() {
  var pick = Math.random();
  if (pick < .334) return 'rock';
  else if (pick >= .334 && pick < .667) return 'paper';
  else return 'scissors';
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    // rl.question('hand2: ', (answer2) => {
    var answer2 = computerpick();
    console.log('Computer picks ' + answer2);
    console.log( rockPaperScissors(answer1, answer2) );
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
