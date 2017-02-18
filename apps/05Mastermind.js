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
  var correctLetterLocations = 0;
  for (var i = 0; i < guess.length; i++) {
    // This is checking for is the correct spot and letter
    // if the guess equals the solution then return the remainder
    if (guessArray[i] === solutionArray[i]) {
      solutionArray[i] = null;
      correctLetterLocations = correctLetterLocations + 1;
    }

  }
  var correctLetters = 0;
  var targetIndex = null;
  // this loop goes throught the lenght of the array and finds if the guess matched the solution
  // and when if it doesnt it will return a number greater than -1
  for (var j = 0; j < guess.length; j++) {
    targetIndex = (solutionArray.indexOf(guessArray[j]));
    if (targetIndex > -1) {
      solutionArray[targetIndex] = null;
      correctLetters++;
    }

  }
  return ((correctLetterLocations) + '-' + (correctLetters));
}
// this give the solution we set 'abcd'and returns a win if they are equal
function mastermind(guess) {
  // your code here
  solution = 'abcd';
  if (guess === solution) {
    return "You guessed it!"
  }
  // This checks for how many turns you have used. If the length goes to 10 then you have no more turns
  var hint = generateHint(solution, guess);
  board.push(guess + ' ' + hint);
  if (board.length === 10){
    return 'You ran out of turns! The solution was ' + solution;

  }
  else {
  return 'Guess again.'
}
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
