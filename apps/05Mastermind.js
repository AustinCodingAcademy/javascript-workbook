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

function generateHint(soultion, guess) {
  // Test - should generate hints
  // Test - should generate hints if solution has duplicates

  // Sets variable arrays, and turn characters into arrays using split
  var solutionArray = solution.split('');
  var guessArray = guess.split('');

  // Spec 2.2 - Loop count to record amount of correct letter locations
  // solution [ null, 'b, 'c', null]
  var correctLetterLocations = [];
  var i = 0

  for (i, i < 4, i++) {
    if(solutionArray === guessArray){
      
    }
    solutionArray = 'null';
  }


  // Spec 2.3 - Loop again this time counting the correct letters



}

function mastermind(guess) {
  // Test - should register a guess and generate hints
  // Test - should be able to detect a win

  solution === 'abcd'; // delete this line when done

  if (guess === solution) {
    return "You guessed it!!!";
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
