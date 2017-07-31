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

function printBoard () {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution () {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  } // *Don't do anything with this*
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint (solution, guess) {
  // white point if it's right letter, wrong place 0-1 (R)
  // red point if it's right letter, right place 1-1 (L)
  var white = ['almost-correct'];
  var red = ['correct'];

  white = 0;
  red = 0;
  guess = guess.split('white');
  solution = solution.split('red');
  for (var i = 0; i < 4; i++) {
    if (guess[i] === solution[i]) {
      white++;
      solution[i] = null;
    }
  }

  for (i = 0; i < 4; i++) {
    var redIndex = solution.indexOf(guess[i]);
    if (redIndex > -1) {
      red++;

      solution[redIndex] = null;
    }
  }
  return (white + '' + red);
}

function mastermind (guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  if (guess === solution) {
    console.log('We Have a Winner!');
    return ('We Have a Winner!');
  } else {
    var hint = generateHint(solution, guess);
    board.push(guess + '' + hint);
  }
}

function getPrompt () {
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
      assert.equal(mastermind(solution), 'We Have a Winner!');
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
