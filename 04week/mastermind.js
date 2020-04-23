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
let hint;
let colors = require('colors');
colors.enable();


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
  let guessArray = guess.split('');
  let solutionArray = solution.split('');

  let correctLetterLocations= 0;
  let correctLetters = 0;

  for (let i=0; i < solutionArray.length; i++) {
    if (solutionArray[i] == guessArray[i]) {
      correctLetterLocations++
      solutionArray[i] = null
      //console.log("correct letter and location")
    } else {
      //console.log("no letter + location match found")
    }
  }

  for (let i=0; i < solutionArray.length; i++) {
    let targetIndex = solutionArray.indexOf(guessArray[i]); 
    if (targetIndex > -1) {
      correctLetters++
      solutionArray[targetIndex] = null
    } else {
      //console.log("no letter match found")
    }
  };

//hint = `
// ****Correct Location: ${correctLetterLocations}`.red
// +`\n******Correct Letter: ${correctLetters}`.white
// +`\n**********Your Guess: ${guess}`.blue

hint = `${correctLetters}-${correctLetterLocations}`;
return hint;
//console.log(hint);

//   console.log(`
// ****Correct Location Count: ${correctLetterLocations}
// ****Correct Letter Count: ${correctLetters}
// ****Your Guess: ${guess}
// ******Solution: ${solution}
// `)
}


function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution

  if (guess == solution) {
    console.log("You guessed it!".america)
    return `You guessed it!`;
  } else {
    generateHint(guess);
    board.push(`${hint} ${guess}`);
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
