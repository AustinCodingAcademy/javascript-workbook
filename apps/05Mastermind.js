'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
var hint="";

prompt.start();

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var trys=0;
// var solution = 'abcd';

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

function generateHint(solution, gess) {
    var solutionArray = [];
    var guessArray = [];
    var correctLetterLocations = 0;
    var correctLetters = 0;
    var targetIndex = 0;

    solutionArray = solution.split("");
    guessArray = gess.split("");
    for (var i=0; i<4;i++){
      if (guessArray[i] === solutionArray[i]){
        correctLetterLocations++;
        solutionArray[i] = null;
        guessArray[i] = '';
      }
    }
    // console.log("------>solutionArray:"+solutionArray);
    for (var i=0; i<4;i++){
      targetIndex = solutionArray.indexOf(guessArray[i]);
      if (targetIndex>-1){
          correctLetters ++;
          solutionArray[targetIndex] = null;
      }
    }
    return correctLetterLocations+"-"+correctLetters;
}

function mastermind(guess) {

    if (guess === solution) {
      return "You guessed it!";
    } else {
      board[board.length] = guess;
      return generateHint(solution, guess);
    }
}

function getPrompt() {

    prompt.get(['guess'], function (error, result) {
        // console.log(solution) ;
        hint = mastermind(result['guess']);
        // printBoard();
        console.log(hint) ;
        if (board.length>=10) {
          console.log('You ran out of turns! The solution was '+solution);
        } else {
          if (!(hint==='You guessed it!')) {
            console.log('Guess again.');
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
