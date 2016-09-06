'use strict';

var assert = require('assert');
var prompt = require('prompt');
// var colors = require('colors/safe');

prompt.start();

var solution = '';
var board = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//Set a global variable to tell if the player has won
var win = false;

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
    var correctLetters = 0;
    var i = 0;
    var targetIndex = 0;

    //How many correct letters are also in the correct location?
    for (i = 0; i < 4; i++){
      if (solutionArray[i] === guessArray[i]) {
        correctLetterLocations++;
        solutionArray[i] = null;
      }
    }

    //How many correct letters were guessed?
    for (i = 0; i < 4; i++) {
      targetIndex = solutionArray.indexOf(guessArray[i]);

      if ( targetIndex > -1) {
        correctLetters++;
        solutionArray[targetIndex] = null;
        }
    }

    // I get an error with the Mocha tests when returning a string that
    // has been modified with colors, so no colors for you!

    return correctLetterLocations + "-" + correctLetters;

}//end generateHint()

function mastermind(guess) {
    //solution = 'abcd';
    var hint = '';

    // Spec 1: check for the correct solution
    if (guess === solution) {
      win = true;
      return 'You guessed it!';
    }
    else {
      // Spec 2: Generate a hint
      hint = generateHint(solution, guess);
      board.push(guess + hint);
    }
}


function getPrompt() {
    prompt.get(['guess'], function (error, result) {
        mastermind(result['guess']);
        if (!win) {
          //The player gets 10 turns to guess
          if (board.length < 11) {
            printBoard();
            console.log("Guess again!");
            getPrompt();
          }
          else {
            console.log("You ran out of turns!");
            console.log("The solution was: " + solution);
          }
        }
        else {
          return 'You guessed it!';
        }
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
