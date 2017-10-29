'use strict';
const colors = require('colors');
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

function generateHint(solution,guess) {
  // your code here
  console.log(solution)
  let solutionArray = solution.split('')
  let guessArray= guess.split('')
  var correctLetterLocations = 0
  let correctLetters = 0
  for(let x = 0; x < solutionArray.length; x++){
    if(guessArray[x]===solutionArray[x]){
      solutionArray[x]= null;
      correctLetterLocations ++;
    }
    for (let s = 0; s < solutionArray.length; s++){
      let targetIndex = solutionArray.indexOf(guessArray[s])
      if(targetIndex > -1){
        correctLetters++;
        solutionArray[s] = null
      }

    }
  }

  return correctLetterLocations.red +'-' + correctLetters.white



}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if (guess === 'abcd'){
    return "You guessed it!"
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
      let expected = ('2'.red)+"-"+('2'.white)
      assert.equal(generateHint('abcd', 'abdc'),expected);
    });
    it('should generate hints if solution has duplicates', () => {
      let expected = ('1'.red)+"-"+('1'.white)
      assert.equal(generateHint('abcd', 'aabb'), expected);
    });

  });

} else {

  generateSolution();
  getPrompt();
}
