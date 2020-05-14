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
    //guess.push();
    //hint.push();
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
  let correctLetterLocations = 0,
    correctLetters = 0;
  let solutionArray = solution.split("");
  let guessArray = guess.split("");
  guessArray.forEach((item, index) => {
    if (item === solutionArray[index]) {
      correctLetterLocations += 1;
      solutionArray[index] = null;
      guessArray[index] = null;
    }
  });
  guessArray.forEach((item, index) => {
    if (item === null) {
      let findIndex = solutionArray.indexOf(item);
      if (findIndex > -1) {
        correctLetters += 1;
        solutionArray[findIndex] = null;
        guessArray[index] = null;
      }
    }
  });
    console.log(`${correctLetterLocations}-${correctLetters}`);
  return `${correctLetterLocations}-${correctLetters}`;
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
   let hint = generateHint(guess);
   board.push(guess);
 
  //console.log(`${board.push(guess)}  ${board.push(hint)}`);
if(guess === solution){
  //if guess is equal to solution
  console.log('You guessed it!');
  return 'You guessed it!';
}
  if(board.length >= 10){
  console.log('You ran out of turns! The solution was ' + solution);
}else{
  console.log('Guess again.');
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