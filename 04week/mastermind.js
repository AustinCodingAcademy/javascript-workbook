'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
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
  //should be [ 'a', 'b', 'c', 'd' ]

  const guessArray = guess.split('');
  //if guess was 'abdc'
  //should be [ 'a', 'b', 'd', 'c' ]

  let redPegs = 0;
  let whitePegs = 0;

  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      redPegs++;
      solutionArray[i] = null;
    }
  }

  for (let i = 0; i < guessArray.length; i++) {
    let targetIndex = solutionArray.indexOf(guessArray[i]);
    
    if (targetIndex > -1) {
      whitePegs++;
      solutionArray[targetIndex] = null;
    }
  }
  //return a string representation of red pegs and white pegs vars
  return `${redPegs}-${whitePegs}`;
}

function addHint(guess) {
  let hint = generateHint(guess);
  board.push(hint);
}

function mastermind(guess, solution) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if (guess.length === 4 && guess !== solution) {
    generateHint(guess);
  } else if (guess == solution) {
    console.log("You guessed it!")
    return "You guessed it!";} 
    if (board.length === 10) {
    console.log(`Game over! ${solution}`);
    return "Game over!" + solution;
  } else if (guess.length < 4) {
    console.log("Must enter 4 letters!");
    return "Must enter 4 letters!"
  } else {
    addHint(guess);
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess, solution);
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
