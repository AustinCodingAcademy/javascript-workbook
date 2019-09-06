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


//Create a function that compares the users input to the solution.
//Run through the array, and compare each index.
//console.log or generate hint to output how many letters are correct, and if location is correct. 
//Example 2-2

function generateHint(guess) {

  let solutionArray = solution.split("");
  let guessArray = guess.split("");

  let correctLetterLocations = 0;

  for(let i=0; i<solutionArray.length; i++){
    if(solutionArray[i] === guessArray[i]){
     correctLetterLocations++;
     solutionArray[i] = null 
    }
  }
  let correctLetters = 0;

  for(let i=0; i<solutionArray.length; i++){
   let targetIndex = solutionArray.indexOf(guessArray[i]);
   if(targetIndex > -1){
     console.log(targetIndex)
     correctLetters++;
     solutionArray[targetIndex] = null 
   }
  }
  return `${correctLetterLocations}-${correctLetters}`
}

// // function isValid(guess) {
// //   let guessArray = guess.split("").trim().toLowerCase()
// //   if(guessArray.length === 4){
// //     return guess
// //   } else {
// //     console.log("Please Enter Valid Guess")
// //   }
// }

//Detect a win by all letters, and indexes match up.

function mastermind(guess) {
  // solution = 'abcd'; // Comment this out to generate a random solution

if(guess === solution){
  console.log("You guessed it!")
  return "You guessed it!"
}   else{
  let hint = generateHint(guess);
  board.push(`${guess} ${hint}`)
  console.log(board.length) 
  console.log("Try Again")
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
