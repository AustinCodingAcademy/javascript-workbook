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
  var solutionArray = solution.split('');
  var guessArray = guess.split('');

  var correctLetterLocations = 0;
  var correctLetters = 0;
  var targetIndex = null;

  for (var i = 0; i < guess.length; i = i + 1 ) {
    //Check if index x for solutionArray === index x for guessArray
    if (guessArray[i] === solutionArray[i]) {
      correctLetterLocations = correctLetterLocations + 1 ;
      solutionArray[i] = null;
    }
  }

  for (var j = 0; j < guess.length; j = j + 1) {
    //Check if guessArray is found at any index of solutionArray
    //Return location of guessArray within solutionArray's index
    targetIndex = solutionArray.indexOf(guessArray[j]);
    if (targetIndex > -1) {
      correctLetters = correctLetters + 1;
      solutionArray[targetIndex] = null;
    }
  }
  return correctLetterLocations + '-' + correctLetters;
}

function mastermind(guess) {
  // Tests passing with or without this hard-coded solution
  // in here, but that doesn't make sense to me so I'm taking
  // it out of commission for now
  // solution = 'abcd';

  var hint = generateHint(solution, guess);
  board.push(guess + ' ' + hint);

  if (guess === solution) {
    return "You guessed it!";
  }

  if (board.length === 10) {
    return 'You ran out of turns! The solution was ' + ' ' + solution;
  }

  else {
    return 'Guess again.';
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
