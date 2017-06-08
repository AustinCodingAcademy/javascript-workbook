'use strict';

const assert = require('assert');
const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint() {
  // your code here
  var guess = guess.split('');
  var solution = solution.split('');
    console.log(guess);
    console.log(solution);
  }

function mastermind(guess) {
  // your code here
  if (guess [''] ===solution ['']) {
   return "You guessed it!";
 }
  if (guess [''] !=solution ['']) {
    return generateHint(guess, solution);
}
 var solution = 'adbc';
 var guess = 'bcda';
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      solution = 'abcd';
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abcd', 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('abcd', 'aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
