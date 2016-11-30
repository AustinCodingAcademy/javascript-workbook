'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  // your code here
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  var correctLetterLocations = 0;
  var correctLetters = 0;

  console.log("Solution: " + solution);
  console.log("Guess: " + guess);
  //check letter-locations
  for (var i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]){
      correctLetterLocations++;
      solutionArray[i] = null;
      console.log("solutionArray " + solutionArray);
    }
  }
  //determine correct-letters
  for (var x = 0; x < solutionArray.length; x++) {
    if (solutionArray.indexOf(guessArray[x]) > -1) {
      //console.log("guess array" + x + guessArray[x]);
      var targetIndex = x;
      //console.log("index of " + solutionArray.indexOf(guessArray[x]))
      //console.log("targetIndex is " + targetIndex)
      if (targetIndex > -1) {
        correctLetters++;
        for (var d = 0; d < solutionArray.length; d++) {
          if (solutionArray[d] !== null && solutionArray[d] === guessArray[targetIndex]) {
            //console.log("solution array of target " + solutionArray[d]);
            solutionArray[d] = null;
          }
        }
        //console.log("cor count if targetIndex = " + correctLetters);
        //console.log("solution array index = " + x);
      }
      //console.log(solutionArray[x]);
      //console.log("correct letter count in if = " + correctLetters);
    }
  //console.log("correct letter count in for = " + correctLetters);
  }
  //console.log(correctLetterLocations+ '-' + correctLetters);
  return correctLetterLocations + '-' + correctLetters;
}

function mastermind(guess) {
  // your code here
  if (guess === solution) {
    return "You guessed it!";
  } else {
    var hint = generateHint(solution, guess);
    board.push(guess + hint);
    if (board.length === 10) {
      return 'You ran out of turns! The Solution was ' + solution;
    } else {
      return 'Guess again.';
    }
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

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
