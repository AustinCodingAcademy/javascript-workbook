'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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

function generateHint (guess) {
  // your code here
  let redCount = 0;
  let whiteCount = 0;
  let checked = [];

  for (var i = 0; i < solution.length; i++) {
    var solutionIndex = solution.indexOf(guess[i]);
    if (solution[i] === guess[i]) {
      redCount++;
      checked.push(guess[i]);
    } else if (solutionIndex !== -1 && !isDupe(guess[i], checked)) {
      whiteCount++;
      checked.push(guess[i]);
    }
  }

  return `${redCount}-${whiteCount}`;
}

function isDupe (letter, checked) {
  return checked.includes(letter);
}

function mastermind (guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  var hint = generateHint(guess);
  board.push(hint);

  if (hint === '4-0') {
    return 'You guessed it!';
  }
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
