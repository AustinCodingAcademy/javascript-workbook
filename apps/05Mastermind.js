'use strict';

var assert = require('assert');
// var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var solution = '';
var guess = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//TEST solution:
// solution = 'aaaa';
// var guess = 'abdc';

function printBoard(hint, guess) {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
        //there was a missing semicolon on line 18
    }
    board.push(hint, guess);
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
  // var hint = 0;

  var solutionArray = solution.split('');
  // console.log(solutionArray);
  var guessArray = guess.split('');
  // console.log(guessArray);
  var correctLetterLocations = 0;
      for (var i = 0; i < solutionArray.length; i++)  {
        if (solutionArray[i] === guessArray[i]) {
          correctLetterLocations++;
          solutionArray[i] = null;
        }
      }
      // console.log(solutionArray);
  var correctLetters = 0;
  for (var j = 0; j < solutionArray.length; j++)  {
    if (guessArray.indexOf(solutionArray[j])) {
      // console.log(guessArray.indexOf(solutionArray[j]));
      var targetIndex = guessArray.indexOf(solutionArray[j]);
      if (targetIndex > -1) {
        // targetIndex = solutionArray[j];
        // correctLetters++;
        solutionArray[j] = null;
        correctLetters++;
      }
    }
  }
      // console.log('correct letters:  ' + correctLetters);
      // console.log('correct locations:  ' + correctLetterLocations);
      // console.log(correctLetters);

  // var hint = colors.red(correctLetterLocations) + "-" + colors.white(correctLetters);
  var hint = correctLetterLocations + '-' + correctLetters;
  // console.log(hint);
  return hint;
  // board.push(board[guess]);
}

function mastermind(guess) {

  if (guess === solution) {
    // isTrue = true;
    return 'You guessed it!';
  }
  else {
    // board[board.length] = guess;
    board += 1;
    return generateHint(solution, guess);
    // return false;
  }
// return isTrue;
}


function getPrompt() {
    prompt.get(['guess'], function (error, result) {
        // console.log(solution);
        var hint = mastermind(result['guess']);
        console.log(hint);
        if (board.length >= 10) {
          console.log('You are out of turns! The answer was ' + solution)
        }
        else {
          if (!(hint === 'You guessed it!'))  {
            console.log('Guess again');
        // mastermind(result['guess']);
        // printBoard();
        getPrompt();
      }
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
