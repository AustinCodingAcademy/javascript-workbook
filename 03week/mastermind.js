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
let WON_MESSAGE = 'You guessed it!';

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

function getCount(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function generateHint(guess) {
  let redDot = 0;
  let whiteDot = 0;

  let found = '';
  for (let i = 0; i < guess.length; i++) {
    if (solution[i] === guess[i]) {
      redDot++;
      found += guess[i];
    }
  }

  for (let i = 0; i < guess.length; i++) {
    let char = guess[i];

    if (solution[i] !== char && solution.indexOf(char) > -1 && getCount(found, char) < getCount(solution, char)) {
      whiteDot++;
      found += char;
    }
  }

  return redDot + '-' + whiteDot;
}

function determineIfWon(hint) {
  return hint === '4-0';
}

function mastermind(guess) {
  let singleLine = {
    guess: guess,
    hint: generateHint(guess)
  };

  board.push(singleLine);

  if (determineIfWon(singleLine.hint)) {
    console.log(WON_MESSAGE);
    return WON_MESSAGE;
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
