'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();


var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var winCheck = false;

function printBoard() {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i])
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
    var correctLetterLocations = 0;
    for (var i = 0; i < 4; i++) {
      if (solutionArray[i] === guessArray[i]) {
        correctLetterLocations++;
        solutionArray[i] = null;
      }
    }
    var correctLetters = 0;
    var targetIndex = 0;
    for (var i = 0; i < 4; i++) {
    targetIndex = solutionArray.indexOf(guessArray[i]);
    if(targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
    }
    }
    return correctLetterLocations + "-" + correctLetters;
}

function mastermind(guess) {
    solution = 'abcd';
    if (guess === solution) {
      winCheck = true;
      return "You guessed it!";
    }else{
      var hint = generateHint(solution, guess);
      board.push(guess + hint);

    }
}


function getPrompt() {
  if(winCheck === false) {
    prompt.get(['guess'], function (error, result) {
      if(board.length === 10) {
        console.log('You ran out of turns! The solution was ' + solution)
      } else {
        console.log( mastermind(result['guess']) );
        printBoard();
        getPrompt();
      }
    });
  }
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
