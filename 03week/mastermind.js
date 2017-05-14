'use strict';

const assert = require('assert');
// const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [];
let solution = 'abcd';
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

function generateHint(solution, guess) {
  let splitSolution = solution.split('');
  let splitGuess = guess.split('');

  let white = 0;
  let red = 0;

  for (var i = 0; i < solution.length; i++) {
      if (splitSolution[i] === splitGuess[i]) {
        red++;
        console.log('red: ', red);
      }

      let found = splitSolution.indexOf(splitGuess[i]);

      if (found > -1) {
        white++;
        splitSolution[found] = null;
        console.log('white: ', white);
      }
  }
  return `${red}-${white - red}`;
}

function mastermind(guess) {

  console.log(board);

  if (solution === guess) {
    return 'You guessed it!';
  } else {
    console.log('try again');
    board.push(`${guess} ${generateHint(solution, guess)}`);
  }
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

  // generateSolution();
  getPrompt();
}
