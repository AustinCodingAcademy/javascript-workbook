'use strict';

const assert = require('assert');
//const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [];
let solution = 'abcd';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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

//this section generates hints for the user
function generateHint(solution, guess) {
  let whtPeg = 0;
  let redPeg = 0;
  let splitSol = solution.split("");    //this splits the solution between the letters for comparison in the array
  let splitGuess = guess.split("");     //this splits the guess between the letters for comparison in the array

  for (let i = 0; i < 4; i++) {  //loop to iterate through the 4 letters of the guess
    if (splitSol[i] === splitGuess[i]) { //calling the individual letters of the guess for exact comparison against the solution.
      redPeg++;                          //this calls the loop for as many times as redPeg does not equal zero
    }
    let found = splitSol.indexOf(splitGuess[i]); //new variable to hold the letters which are correct but not in the correct location.
    if (found > -1) {                //if a letter is found it is > -1. this represents unfound letters
      splitSol[found] = null;        //this makes duplicate letters not in the correct location uncounted
      whtPeg++;
    }
  }
  whtPeg = whtPeg - redPeg;
  return redPeg + "-" + whtPeg;
}

function mastermind(guess) {
  // your code here
  if (guess === solution) {
    return "You guessed it!";  //results when correct guess made
  } else {
    board.push(guess + " " + generateHint(solution, guess)); //results when incorrect guess is made
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    printBoard();
    getPrompt();
  });
}

// Tests --------------------------------------------

if (typeof describe === 'function') {

  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      solution = 'abcd';
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abcd', 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('abcd', 'aabb'), '1-1');
    });

  });

} else {

  //generateSolution();
  getPrompt();
}
