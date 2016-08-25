'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var hint = [];
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

    return solution;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
    // your code here
    var solutionArray = solution.split("");
    var guessArray = guess.split("");
    var correctLetterLocations = 0;
    // determine correct letter location
    for(var i=0; i<=3; i++){
      if(guessArray[i] === solutionArray[i]){
          correctLetterLocations++;
          solutionArray[i] = null;
    //        return correctLetterLocations;
      }
    }
      // determine correct letters
      var correctLetters = 0;

      // for if solution i
      //    correctLetters
      //for(var )

      for(var j=0; j<=solutionArray.length; j++){

        var targetIndex = guessArray.indexOf(solutionArray[j]);
        console.log(targetIndex);
        if(targetIndex > -1){
                correctLetters++;
                solutionArray[j] = null;

        }
    }
    hint = correctLetterLocations + "-" + correctLetters;
    return hint;
}


function mastermind(guess) {
    // your code here
  if(guess === solution){
    console.log('You guessed it!');
    return 'You guessed it!';
  } else {
      generateHint(solution, guess);
  }
  board.push(hint + " " + guess );
  return guess;

}


function getPrompt() {
    prompt.get(['guess'], function (error, result) {
        console.log( mastermind(result['guess']) );
        printBoard();
        console.log(solution);
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
