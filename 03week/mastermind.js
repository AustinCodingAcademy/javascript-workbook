'use strict';

const assert = require('assert');
// const colors = require('colors/safe');
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

function generateHint(solution, guess) {

//have to split the strings into arrays.  can't reassign solution or guess so reassign to new names splitSolution and splitGuess
  let splitSolution = solution.split("")
  let splitGuess = guess.split("")

  var red = 0;
  var white = 0;

// red pegs indicating same location and same letter as solution
  for(var i = 0; i < 4; i++) {
    if (splitGuess[i] === splitSolution[i]) {
      red++
    }
  }

//white pegs indicating same letter as solution but in different location
  for(var i = 0; i < splitSolution.length; i++) {
    var ispresent = splitGuess.indexOf(splitSolution[i]);
    if (ispresent > -1) {
      white++
      splitGuess[ispresent] = null
    }
  }

// accounting for duplicates
  white -= red

//returns the hint
  return(red + '-' + white);
}

function mastermind(guess) {
  // pass in the guess function
  if(solution === guess) {
    return("You guessed it!");
  } else {
    // pushes the guess and the hint to the board
    return board.push(guess + generateHint(solution, guess))
  }

}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    printBoard();
    getPrompt();
  });
}

// Tests

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
  //
  // generateSolution();
  getPrompt();
}
