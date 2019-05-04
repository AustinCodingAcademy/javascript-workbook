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

//generateHint() should take two arguments, solution and guess. 
//Create a variable correctLetterLocations that will record how many correct "letter-locations" were guessed. /// Set correctLetterLocations equal to 0. 
//In a for loop, iterate over the solutionArray, comparing each index of solutionArray against the same index of guessArray. If the item matches, increment correctLetterLocations, and set that index in solutionArray to null.
//Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray
//Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray
//Save that index in a variable called targetIndex. Now, if targetIndex is greater that -1, increment correctLetters and set the item in solutionArray at that index equal to null.

function generateHint(solution, guess) {
  let solutionArr = solution.split('');
  let guessArr = guess.split('');
  let correctLetterLocations = 0;
  let correctLetter = 0;
  for(let i = 0;  i < 4; i++){
    if(solutionArr[i] === guessArr[i]){
      correctLetterLocations = correctLetterLocations + 1;
      solutionArr[i] = null;
    }
  }
  for(let i = 0; i < 4; i++){
    let targetIndex  = solutionArr.indexOf(guessArr[i])
    if(targetIndex > -1){
      correctLetter = correctLetter + 1;
      solutionArr[targetIndex] = null;
  }
}
  return correctLetterLocations + "-" + correctLetter;
}

//mastermind(), if the guess you passed in equals the solution, return 'You guessed it!';

function mastermind(guess) {
  solution = 'abcd'; 
  if(guess === solution){
    console.log('You guessed it!');
    return 'You guessed it!';
  }
  else if(guess != solution){
    let hint = generateHint(solution, guess);
    board.push(guess, hint);
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
