'use strict';
var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// console.log(colors.blue('test')); how to call the colors package

var board = [];
var solution = 'abcd';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var hint = [];

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

  var correctionLetterLocations = 0;
  var correctLetters = 0;
  var solutionArray = solution.split('');
  var guessArray = guess.split(''); //split returns the string from guess and solution and turning it into an array

  for(var i = 0; i< solutionArray.length; i++){

    if(solutionArray[i] === guessArray[i]){
      correctionLetterLocations++; //counter of number of correct letter locations

      solutionArray[i] = null;
    }
  }
// is used to let the computer know to put null in the spot where a match was found perfectly in position so our next code won't see it.

  for(var i = 0; i< solutionArray.length; i++){
    var targetIndex = solutionArray.indexOf(guessArray[i]);
      if (targetIndex > -1) {
        correctLetters++;

        solutionArray[targetIndex] = null;
      }
}

  hint = correctionLetterLocations + '-' + correctLetters;
  return hint;
}

function mastermind(guess) {
  if (guess === solution) {
    return 'You guessed it!';
  }
  else {
    generateHint(solution, guess);
  }
  board.push(hint + ' ' + guess);

  return guess;
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
