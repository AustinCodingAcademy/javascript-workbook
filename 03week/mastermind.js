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
  // **** Should this be 'correctItemsArr'? ****
  return `${itemsArr.length} are correct`
  //
}

// Guess should contain 4 items which would compare each item and its position to the solution's items and position
function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // Turn solution into an array in order to compare the index of each item on the board
  const solutionArr = solution.split('');
  // Push the guess to the board to then check against solution
  const boardLength = board.push(guess);
  // Create an array to compare to the board, which will allow us to generate a hint; ie, "3 guesses are correct"
  const correctItemsArr = [];
  // Check to see if the board has a valid answer of 4 pegs
  // If boardLength is equal to 4, compare board pegs to solution pegs
  if (boardLength === 4) {
    // Iterate through all the indices / pegs in the BOARD array
    for (let i = 0; i < board.length; i++) {
      // Iterate through all the indices / pegs in the SOLUTION array
      for (let e = 0; e < solutionArr.length; e++) {
        // Beginning at the board[0] position, if each indices' peg in the BOARD matches the SOLUTION peg
        if (board[i] === solutionArr[e]) {
          // Add the current BOARD peg to the correctItemsArr array
          correctItemsArr.push(i)
        }
      }
    }
    // If the correctItemsArr is full of correct pegs
    if (correctItemsArr.length === 4) {
      // Print the winning statement
      console.log('You are a BOSS! You guessed all 4 items correctly!')
      return 'You are a BOSS! You guessed all 4 items correctly!'
    } else {
      // If the correctItemsArr isn't full and correct, run the generateHint function
      console.log(generateHint(correctItemsArr))
    }
    // Clear the board after each guess
    board = [];
  }
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
