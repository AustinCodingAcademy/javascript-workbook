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
    var correctLetterLocation = 0;
    for (var i = 0; i <solutionArray.length; i++){
      if (solutionArray[i] === guessArray[i]){
          correctLetterLocation ++;
          solutionArray[i] = null;
      }
    }
    var correctLetter = 0;

      for (var y = 0; y < solutionArray.length; y++){
      var targetIndex = solutionArray.indexOf(guessArray[y]);
      if (targetIndex > -1){
        correctLetter++;
        solutionArray[targetIndex] = null;
      }
    }
    return colors.red(correctLetterLocation) + "-" + colors.white(correctLetter);
}

function mastermind(guess) {
    // your code here

    if (guess === solution){
      return "You guessed it!";
    }
    else {
      if (board.length < 10){
        var hint = generateHint(solution, guess);
        board.push(guess + " " + hint);
        console.log ("Guess Again!");
      }
        else {
        printBoard();
        return "You ran out of turns. The solution is: " + solution;
      }
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
