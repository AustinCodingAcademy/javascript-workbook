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
var colors = require('colors');

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
  var colors = require('colors');
  var solutionArray = solution.split("");
  var guessArray = guess.split("");
  var correctLetterLocations = 0;
  for (var i = 0; i < 4; i++) {
    if (guessArray[i] === solutionArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }
  var correctLetters = 0
  for (var i = 0; i < 4; i++) {
    var targetIndex = solutionArray.indexOf(guessArray[i]);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
    }
  }
  // correctLetterLocations = correctLetterLocations.toString();
  // correctLetters = correctLetters.toString();
  var hint = correctLetterLocations + '-' + correctLetters;
  var move = guess + ' ' + hint;
  board.push(move);
  console.log(move);
  return hint;
}

function endGame() {
  if (board.length === 10) {
    console.log('You ran out of turns! The solution was ' + solution);
  }
  console.log('Guess again!');
}

function mastermind(guess) {
  if (guess === solution) {
    return 'You guessed it!';
  }
  generateHint(solution, guess);
  endGame();
  console.log(board);
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
