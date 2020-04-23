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
  let guessArray = guess.split('');
  let solutionArray = solution.split('');
  let correctLetterLocations= 0;
  let correctLetters = 0;

  for (let i=0; i < solutionArray.length; i++) {
    if (solutionArray[i] == guessArray[i]) {
      correctLetterLocations++
      solutionArray[i] = null
      console.log("correct letter and location")
    } else{
      console.log("no letter + location match found")
      }
    }

    for (let i=0; i < solutionArray.length; i++) {
      if (guessArray.indexOf(i) > -1) {
        correctLetters++
        console.log("correct letter")
      } else {
        console.log("no letter match found")
      }
    }
      // Set a variable correctLetters equal to 0, 
      // In a for loop, again iterate over the solutionArray. 
      // Using .indexOf, determine if the item at the current index in guessArray 
      // appears inside of solutionArray. Save that index in a variable called targetIndex. 
      // Now, if targetIndex is greater that -1, 
      // increment correctLetters and set the item in solutionArray at that index equal to null.
   
//return count;
  console.log(`
****Correct Location Count: ${correctLetterLocations}
****Correct Letter Count: ${correctLetters}
****Your Guess: ${guess}
****Solution: ${solution}
`);
}


function mastermind(guess) {
  //solution = 'abcd'; // Comment this out to generate a random solution

  if (solution == guess) {
    console.log("You guessed it!")
  } else {
    generateHint(guess);
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
