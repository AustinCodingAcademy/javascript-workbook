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

function generateHint(guess) {
  // your code here
  const solutionArray = solution.split('');
  const guessArray = guess.split('');
  let redPegs = 0;
  let whitePegs = 0;
  let targetIndex = null;

  for(let i = 0 ; i < solutionArray.length ; i++) {
    if(solutionArray[i] === guessArray[i]) {
      redPegs++
      solutionArray[i] = null;
    }
  }

  for(let j = 0 ; j < solutionArray.length ; j++) {
    targetIndex = solutionArray.indexOf(guessArray[j]);
    if(targetIndex !== -1) {
      whitePegs++
      solutionArray[targetIndex] = null;
    }
  }
  return `${redPegs}-${whitePegs}`
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

  if(checkWin(guess, solution)){
    console.log(checkWin(guess, solution));
    return checkWin(guess, solution);
  }

  let hint = generateHint(guess);
  board.push(`${guess} ${hint}`);
  console.log(`turn: ${board.length}`);
  console.log(checkLoss(solution));
}

function checkWin(guess, solution) {
  if(guess === solution) {
    return `You guessed it!`
  }
}

function checkLoss(solution) {
  let turn = board.length;
  if(turn > 9) {
    return `You ran out of turns! The solution was ${solution}`
  } else {
    return 'Guess Again.'
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