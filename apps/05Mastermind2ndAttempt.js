'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var noTurns = false;

function printBoard() {
var toPrint = board;
    if ('Guess again.') {
      for (var i = 0; i < board.length; i++) {
        toPrint = board[i];
    }
    console.log(toPrint);
  }
    if (noTurns)  {
      process.exit();
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
  var solutionArray = solution.split(''),
      guessArray = guess.split('');
  var correctLetterLocations = 0,
      correctLetters = 0;
      for (var i = 0; i < solutionArray.length; i++)  {
        if (solutionArray[i] === guessArray[i]) {
          correctLetterLocations++;
          solutionArray[i] = null;
        }
      }
      for (var j = 0; j < solutionArray.length; j++)  {
        if (guessArray.indexOf(solutionArray[j])) {
          var targetIndex = guessArray.indexOf(solutionArray[j]);
          if (targetIndex > -1) {
          correctLetters++;
          solutionArray[targetIndex] = null;
        }
        }
      }
var hint = correctLetters + '-' + correctLetterLocations;
return hint;
}

function mastermind(guess) {
  if (guess === solution) {
    return 'You guessed it!';
  }
  else if (board.length === 10) {
    noTurns = true;
    return 'You ran out of turns! The solution was ' + solution;
  }
  else {
    var hint = generateHint(guess, solution);
    board.push(hint);
    // printBoard();
    return 'Guess again.';
    // return generateHint(guess, solution);
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
