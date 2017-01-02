'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var turns = 10;
var hint;
var solutionArray;
var guessArray;
var correctLetters;
var correctLetterLocations;
var match;

function printBoard() {
  for (var i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (var i = 0; i < 4; i++) {
    var randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  // your code here

  solutionArray = solution.split("");
  guessArray = guess.split("");
  correctLetters = 0;
  correctLetterLocations = 0;

  for (var i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }
  for (var j = 0; j < guessArray.length; j++) {
    match = solutionArray.indexOf(guessArray[j]);
    if ( match > -1 ) {
      correctLetters++;
      solutionArray[match] = null;
    }
  }
  return correctLetters + "-" + correctLetterLocations;
}

function mastermind(guess) {
  // your code here

  if (guess === solution) {
    return "You guessed it!";
  } else if (board.length === 10) {
    return "You ran out of guesses, the correct solution was " + solution;
  } else if (guess !== solution) {
    var hint = generateHint(solution, guess);
    board.push(hint);
    turns--;
    return "Try again, turns remaining  " + turns;
  } 
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#mastermind()', function () {
    it('should register a guess and generate hints', function () {
      solution = 'abcd';
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', function () {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', function () {
    it('should generate hints', function () {
      assert.equal(generateHint('abcd', 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', function () {
      assert.equal(generateHint('abcd', 'aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
