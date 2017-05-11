'use strict';

const assert = require('assert');
// const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i <= board.length-1; i++) {
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

function generateHint(solution, gs) {
  //check for reds
  board = [];
  let redCount = 0;
  for (var i = 0; i <= gs.length-1; i++) {
    if (solution[i] === gs[i]) redCount++;

  }
  //check for white
  let whiteCount = 0;
  for (var i = 0; i <= solution.length-1; i++) {
    let current = '';
    for (var j = 0; j <= gs.length-1; j++) {
      if (current !== solution[i]) {
        if (solution[i] === gs[j] && solution[i] !== gs[i]) {
          whiteCount++;
          current = solution[i];
        }
      }
    }
  }

  //log results
  for (var i = 0; i <= gs.length-1; i++) {
    board.push(gs[i]);
  }
  board.push(redCount + '-' + whiteCount);
  return(board[4]);
}

function mastermind(guess) {
  let count = 0;
  board = [];
  let gs = [];
  for (var i = 0; i < 4; i++) {
    gs.push(guess[i]);
  }
  generateHint(solution, gs);
  count++;
  if (board[4] === '4-0') {
    return('You guessed it!');
  }
  board = board.join('').split(',');
  return('try again');

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
