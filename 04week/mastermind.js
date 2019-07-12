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

  // Takes in one argument, the user input.
function generateHint(guess) {
  // Creating variables that split the solution array and guess array.
  let solutionArray = guess.split('');
  let guessArray = guess.split('');
  let correctLetterLocations = 0;
  let correctLetters = 0;

 for (let i = 0; i < solutionArray.length; i++) {
   if (solutionArray[i].includes(guessArray[i])) {
     correctLetterLocations += 1;
     correctLetterLocations[i] = null;
   }
 }

 
 for (j = 0; j < splitString.length; j++) {
  let targetIndex = splitString[j].includes(splitDif[j]);
  if (targetIndex > -1) {
    correctLetters += 1;
    correctLetterLocations[j] = null;
    }
  }
}



function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  if (guess == solution) {
    return 'You guessed it!';
  } else {
    return false;
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
