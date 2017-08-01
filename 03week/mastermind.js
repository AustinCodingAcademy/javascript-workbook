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

function generateHint(itemsArr) {
  return `${itemsArr.length} are correct`
  //
}


function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // The guess should contain 4 items which would compare each item position to
  // the solution's items and position
  // Create solution into an array in order to compare the index of each item
  const solutionArr = solution.split('');
  // pushing the guess to the board to then check against solution
  const boardLength = board.push(guess);
  // if boardLength is equal to 4 compare to solution
  const correctItemsArr = [];

  if (boardLength === 4) {
    // console.log(solutionArr, 'arr')

    for (let i = 0; i < board.length; i++) {

      for (let e = 0; e < solutionArr.length; e++) {

        if (board[i] === solutionArr[e]) {
          correctItemsArr.push(i)
        }
      }
    }
    if (correctItemsArr.length === 4) {
      console.log('You are a BOSS! You guessed all 4 items correctly!')
      return 'You are a BOSS! You guessed all 4 items correctly!'
    } else {
      console.log(generateHint(correctItemsArr))
    }
    board = [];
  }

  // if true then check for win(items and position are eqaul)
  // if items and posiitons are not equal run hint
  console.log(boardLength, 'length');
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
