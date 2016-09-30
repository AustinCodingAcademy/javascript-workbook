'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var hint;
var index;

function printBoard() {
    for (index = 0; index < board.length; index++) {
        console.log(board[index]);
    }
}

function generateSolution() {
    for (index = 0; index < 4; index++) {
        var randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
    // your code here
    var solutionArray = solution.split("");
    var guessArray = guess.split("");
    var correctLetterLocations = 0;
    var correctLetters = 0;

    for (index= 0; index < guessArray.length; index++) {
      if (guessArray[index] === solutionArray[index]) {
        correctLetterLocations++;
        solutionArray[index] = null;
      }
    }

    for (index= 0; index < guessArray.length; index++) {
    var targetIndex = solutionArray.indexOf(guessArray[index]);
    if (guessArray.indexOf(solutionArray[index]) > -1) {
      correctLetters++;
      solutionArray[index] = null;
    }
    }

    hint = correctLetterLocations + "-" + correctLetters;
    return hint;

}

function mastermind(guess) {
    // your code here
    if (board.length < 10)
    {
        if (guess === solution)
        {
          return 'You guessed it!';
        }
        else
        {
          generateHint(solution, guess);
          board.push(guess + "  " + hint);
          return 'Guess Again!';
        }
      }
      else {
        return "You're out of guesses! Try again later.";
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

}
else {
    generateSolution();
    getPrompt();
}
