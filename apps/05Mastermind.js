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
  // turning solution and guess into an array
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  var correctLetterLocations = 0;
  var correctLetters = 0;

 // looping through solution and guess to find letter matches
  for(var i = 0; i < solutionArray.length; i++) {
    var targetIndex = solutionArray.indexOf(guessArray[i]);
    if(solutionArray[i] === guessArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
    else if(targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
    }
  }

  return correctLetterLocations + '-' + correctLetters;
} 

function mastermind(guess) {
  // setting hint equal to the return value of generateHint
  var hint = generateHint(solution, guess);
  board.push(guess + " " + hint); 

  //looking for win
  if(guess === solution) {
    return "You guessed it!";
  }
  //game ends when user runs out of turns
  else if(board.length === 10) {
    return "You ran out of turns! The solution was " + solution + ".";
  }
  // user didn't win, guess again
  else {
    return "Guess again!";
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
