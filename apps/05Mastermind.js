'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i])
    }
}

function generateSolution() {
    // this generates a random index number and adds it to the empty string varialbe to produce a solution
    for (var i = 0; i < 4; i++) {
        var randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
    }
}

// this function is called in the generateSolution funtion to get a random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution,guess) {

    // creating a variable so we can split the solution and guess into an array from a string.
    var solutionArray = solution.split('');
    var guessArray = guess.split('');
    var correctLetterLocations = 0;
    var correctLetters = 0

    // a for loop is created to show iterate through the solution to see if any guesses match the solution.
    for (i = 0, i < solutionArray.length, i++) {
      if (solutionArray[i] === guessArray[i]) {
        solutionArray[i] = null;
        correctLetterLocations++;
      }
    }

    // using indexof to determine if there are correct letters in the guess.
    for (i = 0, i < solutionArray.length, i++) {
      var targetIndex = solutionArray.indexof(guessArray[i])
      if (targetIndex > -1) {
        correctLetters++;
        solutionArray[targetIndex] = null;
      }
    }
}

function mastermind(guess) {
  if (guess === solution) {
    console.log('Congrats son, you guessed it.')
  }
}


function getPrompt() {
    prompt.get(['guess'], function (error, result) {
        console.log( mastermind(result['guess']) );
        printBoard();
        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

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
