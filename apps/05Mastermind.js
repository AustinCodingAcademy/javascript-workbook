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
  // split solution and guess into seperate arrays
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  //create variables for what you find.  Correct letters and their locations.
  var correctLetterLocations = 0;
  var correctLetters = 0;
  //loop through the guessed letters to see if they match any of the solution letters locations.  if so add to the correct letter locations variable.
  for (var i = 0; i < 4; i++) {
    var solutionLetter = solutionArray[i];
    var guessLetter = guessArray[i];
    if (solutionLetter === guessLetter) {
      correctLetterLocations++;
      solutionArray[i] = null;
   }
  }
  //Loop through the guess letters to see if they match the correct letters in the solution.  If they do add to correct letters variable.
  for (i = 0; i < 4; i++){
    var guessLetter = guessArray[i];
    var targetIndex = solutionArray.indexOf(guessLetter);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
  }
}
//return the number of correct letter locations and the correct letters from those loops.
  return correctLetterLocations + "-" + correctLetters;
}
//check for win and if there is no win, provide hint.
function mastermind(guess) {
  if (guess === solution){
    return "You guessed it!"
  }
  generateSolution();
  var hint = generateHint(solution, guess);
  board.push(guess + " " + hint);
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
