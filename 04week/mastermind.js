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
let currentTurn = 0;

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
  // Split the solution and guess, create a array
  let solutionArray = solution.split("");
  let guessArray = guess.split("");

  // Check how many correct LOCATION is guessed
  // The variable "correctLetterLocations" will increase when matching correct "locations" is detected.
  let correctLetterLocations = 0;
  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }
  // Check how many correct LETTER is guessed
  // The variable "correctLetters" will increase when matching correct "letter" is detected.
  let correctLetters = 0;
  for (let j = 0; j < solutionArray.length; j++) {
    let targetIndex = solutionArray.indexOf(guessArray[j]);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
    }
  }
  // return hint as String
  return (
    correctLetterLocations + "-" + correctLetters
  );
}

function mastermind(guess) {
  let hint = "";
  currentTurn++;

  //Check correct solution
  if (guess === solution) return "You guessed it!";
  else hint = generateHint(solution, guess);

  //Once it is a wrong attempt, push the guess and hint on the board
  let boardState = "attempt-" + currentTurn + ": " + guess + " " + hint;
  board.push(boardState);
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
