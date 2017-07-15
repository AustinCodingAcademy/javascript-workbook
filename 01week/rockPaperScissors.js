'use strict';

var input = ['rock', 'scissors', 'paper'];
var output = ['It\'s a tie!', 'Hand one wins!', 'Hand two wins!', 'Invalid Input: You may only enter "rock", "paper", or "scissors".'];
// The winner is determined by assigning a numerical value to all of player1's
// and player2's possible choices and then summing them. The numerical values
// were selected such that there would be a unique sum for each possible outcome.
// The player1InputValue array conforms to order of input array, i.e. 1 = rock.
var player1InputValue = [1, 10, 100];
// The player2InputValue array conforms to order of input array, i.e. -1 = rock.
var player2InputValue = [-1, -10, -100];
// The inputSum array lists all possible sums of player1InputValue + player2InputValue
var inputSum = [0, -90, -9, 99, 90, 9, -99];
// A sum of 0 is a tie. The sums -90, -9, and 99 coorespond to player1 winning,
// while the remaining sums coorespond to player2 winning. These outcomes are
// represented in the inputSumToOutputIndex array, using the same indexes. The
// value of the inputSumToOutputIndex array corrsponds to the output array index.
// Ex: Index 4 corresponds to 99 and 1. The 1 value refers to output[1]
var inputSumToOutputIndex = [0, 1, 1, 1, 2, 2, 2];
var player1InputValueIndex, player2InputValueIndex;

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function randomHands () {
  var inputIndex = Math.floor(Math.random() * input.length);
  return rockPaperScissors(input[inputIndex], input[inputIndex]);
}

function rockPaperScissors (player1Input, player2Input) {
  // Determines the Index to the value of the player's hand
  player1InputValueIndex = input.indexOf(player1Input.toLowerCase().trim());
  player2InputValueIndex = input.indexOf(player2Input.toLowerCase().trim());
  if (player1InputValueIndex === -1 || player2InputValueIndex === -1) {
    // Index not found. Must be invalid input
    return output[3];
  } else {
    // Sums the values of the two hands. Determines the index of the sum in the inputSum array.
    // Uses this index in the inputSumToOutputIndex array to determine the index of the output array.
    return output[inputSumToOutputIndex[inputSum.indexOf(player1InputValue[player1InputValueIndex] + player2InputValue[player2InputValueIndex])]];
  }
}

function getPrompt () {
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
      assert.equal(rockPaperScissors('rock', 'rock'), 'It\'s a tie!');
      assert.equal(rockPaperScissors('paper', 'paper'), 'It\'s a tie!');
      assert.equal(rockPaperScissors('scissors', 'scissors'), 'It\'s a tie!');
    });
    it('should detect that hand one won', () => {
      assert.equal(rockPaperScissors('scissors', 'paper'), 'Hand one wins!');
      assert.equal(rockPaperScissors('paper', 'rock'), 'Hand one wins!');
      assert.equal(rockPaperScissors('rock', 'scissors'), 'Hand one wins!');
    });
    it('should detect that hand two won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), 'Hand two wins!');
      assert.equal(rockPaperScissors('paper', 'scissors'), 'Hand two wins!');
      assert.equal(rockPaperScissors('scissors', 'rock'), 'Hand two wins!');
    });
    it('should scrub input to ensure lowercase with \'trim\'ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), 'Hand two wins!');
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), 'Hand two wins!');
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), 'Hand one wins!');
    });
    it('should randomize both hands to same value and detect a tie', () => {
      assert.equal(randomHands(), 'It\'s a tie!');
    });
    it('should detect invalid input', () => {
      assert.equal(rockPaperScissors('rock ', 'xixxrx'), 'Invalid Input: You may only enter "rock", "paper", or "scissors".');
      assert.equal(rockPaperScissors('rocky ', 'sCiSsOrs'), 'Invalid Input: You may only enter "rock", "paper", or "scissors".');
    });
  });
} else {
  getPrompt();
}
