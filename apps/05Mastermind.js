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
  var solutionArray = solution.split('')
  var guessArray = guess.split('')
    // console.log(guessArray);
    // console.log(solutionArray);

  var correctLetterLocations = 0;
  // console.log(correctLetterLocations)

  for (var i = 0; i < guess.length; i++) {
    if (guessArray[i] === solutionArray[i]) {
      solutionArray[i] = null;
      correctLetterLocations = correctLetterLocations + 1;

      // console.log(correctLetterLocations);
      // console.log(solutionArray);
      // return correctLetterLocations;
    }
    // else{
    //   return correctLetterLocations;
    // }
  }

  var correctLetters = 0;
  var targetIndex = null;
  for (var j = 0; j < guess.length; j++) {
    targetIndex = (solutionArray.indexOf(guessArray[j]));
    if (targetIndex > -1) {
      solutionArray[targetIndex] = null;
      correctLetters++;

      // console.log(targetIndex);
      // console.log(correctLetters);
      // console.log(solutionArray);

      // console.log((colors.red(correctLetterLocations)) + (colors.white(correctLetters)));

    }

  }
  return ((correctLetterLocations) + '-' + (correctLetters));
}

function mastermind(guess) {
  // your code here
  solution = 'abcd';
  if (guess === solution) {
    return "You guessed it!";
  }
  var hint = generateHint(solution, guess);
  board.push(guess + ' ' + hint);
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log(mastermind(guess));
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#mastermind()', function() {
    it('should register a guess and generate hints', function() {
      solution = 'abcd';
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', function() {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', function() {
    it('should generate hints', function() {
      assert.equal(generateHint('abcd', 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', function() {
      assert.equal(generateHint('abcd', 'aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
