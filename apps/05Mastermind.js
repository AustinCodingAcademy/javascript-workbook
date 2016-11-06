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

  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  var correctLetters = 0;
  var correctLetterLocations;
  var solutionContainer = [];
  var guessContainer = [];
  var match = null;
  var temp;


  for (var i = 0; i < solutionArray.length; i++) {
  /* if (solutionArray.indexOf() === guessArray.indexOf()) {
      solutionArray = null;}*/
    console.log("solution array", solutionArray[i]);
    solutionContainer.push(solutionArray[i]);
    console.log(solutionContainer);
  }

  for (var i = 0; i < guessArray.length; i++) {
    console.log("guess array", guessArray[i]);
    guessContainer.push(guessArray[i]);
    console.log(guessContainer);
  }

  for (var i = 0; i < guessArray.length; i++) {
    temp = solutionArray[i].indexOf(guessArray[i]);
    console.log('temp', temp)
    if ( temp === -1 )
      match = false;
  }
  console.log(match);
  return match;

  /*while (guessArray !== solutionArray) {
    correctLetters++
    console.log('correctLetters', correctLetters);
  }*/
}

function mastermind(guess) {
  // your code here
  var counter = 0;

  console.log(guess);
  console.log(solution);

  if (guess !== solution) {
    
    board.push(guess);
    console.log('board', board);

    generateHint(solution, guess);

    if (board.length > 10) {
      return "Game over!"
    }
  } else if (guess === solution) {
      return "You guessed it!";
  }
  return guess;
  /*var correctLetterLocations = 0;
  var correctLetters = 0;

  if (guessArray contains any correctLetters) that werent in correct location

  for (var i = 0; i < solutionArray.length; i++) {
    results.push(solutionArray[i]);

    var targetIndex;

    if (targetIndex > -1) {
      correctLetters++
    }
  }*/
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log('\n' + 'Guess:');
    console.log( mastermind(guess) + '\n');
    console.log('Board:');
    printBoard();
    console.log('\n' + 'Solution: ' + solution + '\n');
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
