'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let hint = '';

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

function generateHint(guess) {
  let myGuess = guess.split('');
  let theSolution = solution.split('');
  let array = [];
  let correctLetterCorrectPlace = 0;
  let correctLetterWrongPlace = 0;
  // Locate the correct letter and the correct index
  for (let i = 0; i < theSolution.length; i++) {
    if (theSolution[i] === myGuess[i]) {
      array.push(myGuess[i]);
      correctLetterCorrectPlace++;
      // Locates the correct letter guessed but in wrong index
    } else if (theSolution.includes(myGuess[i]) && (array.includes(myGuess[i]) === false)) {
      array.push(myGuess[i]);
      correctLetterWrongPlace++;
    }
  }
  hint = `${correctLetterCorrectPlace}-${correctLetterWrongPlace}`;
  return hint;
}

function mastermind(guess) {
  generateHint(guess);
  // Checks for win else returns myGuess with a hint
  if(guess === solution) {
    return 'You guessed it!';
  } else {
    board.push(guess + ': ' + hint);
    printBoard();
  }
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log(mastermind(guess));
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
      solution = 'abcd';
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      solution = 'abcd';
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
