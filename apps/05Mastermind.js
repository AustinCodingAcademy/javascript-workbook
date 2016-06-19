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
  return Math.floor( Math.random() * (max - min) ) + min;
}

function generateHint(solution, guess) {
  //The split() method splits a String object into an array of strings by
  //separating the string into substrings i.e.['a','b','c','d'].
    var solutionArray = solution.split('');
    var guessArray = guess.split('');
    var correctLetterLocations = 0;
    //this loop will count how long the soloutionArray and itterate until it
    //reaches that length i.e. 4. Then it will check each letter in the same
    //position to see if they match. If they match it will increment
    //correctLetterLocations by 1. If it reaches 4 it will give you a win.
    //This is the red pin on the game.
    for (var i = 0; i < solutionArray.length; i++) {
      if (solutionArray[i] === guessArray[i]) {
          correctLetterLocations++;
          //changes the value of a specific letter in the solutionArray array.
          solutionArray[i] = null;
       }
     }
    //This finds out if your letter is correct.
    //It's basically the equivilent of a white pin on the game.
    //It will correctLetters++ everytime it finds a letter
    //that matches your solutionArray.
    var correctLetters = 0;
    //It does this by using a forloop function that will loop until
    // i < solutionArray.length.
    for (var i = 0; i < solutionArray.length; i++) {
      //In targetIndex, we use (guessArray[i]) to
      //map the position of each value in the (guessArray) i.e. ['a','b','c','d']
      //since targetIndex is inside a forloop the (guessArray[i]) will increment
      //until we reach whatever "i < solutionArray.length" is;
      //i.e. When i === 3, guessArray[i] === d.
      //It then uses the .indexOf() method to find
      //the index of whatever letter guessArray[i] is equal to in solutionArray.
      //i.e If solutionArray === ['a','b','c','d']
      //and guessArray[3] === d, then indexOf(d) === 3 in the solutionArray.
      var targetIndex = solutionArray.indexOf(guessArray[i]);
      //as long as targetIndex > -1 it will increment correctLetters by 1.
      if (targetIndex > -1) {
          correctLetters++;
      //This will change the value of values in the solutionArray everytime
      //targetIndex increases. i.e. if targetIndex === 3
      //then solutionArray[targetIndex] === d will change to ['a','b','c',null]
          solutionArray[targetIndex] = null;
      }
    }
    // return ( colors.red(correctLetterLocations) + "-" + colors.white(correctLetters) );
    //return ( (correctLetterLocations) + "-" + (correctLetters) );
 }

 function pinColor(hint) {
     var colorsSplit = hint.split('-');
     return ( colors.red(colorsSplit[0]) + "-" + colors.white(colorsSplit[1]) );
 }

function mastermind(guess) {
    // Remove so that you generate random solution
    solution = 'abcd';

    if (guess === solution) {
      return 'You guessed it!';
    }
    else if (guess !== solution) {
      var hint = generateHint(solution, guess);
      hint = pinColor(hint);
      board.push( guess + " " + hint );
      return board;
    }
    else if (board.length === 10) {
      return ( 'You ran out of turns! The solution was ' + solution );
    }
    else {
      return 'Guess again.';
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
