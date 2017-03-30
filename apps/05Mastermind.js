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
var solutionLength = null;

function printBoard() {
  for (var i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution(solutionLength) {
  for (var i = 0; i < solutionLength; i++) {
    var randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  var correctLetterLocations = 0;
  var correctLetters = 0;

  for (var i = 0; i < solutionLength; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }

  }

  for (var j = 0; j <= solutionLength; j++) {

    //If this is greater than -1 then the string has been found.
    var targetIndex = solutionArray.indexOf(guessArray[j]);

    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
    }
  }

  return correctLetterLocations + '-' + correctLetters;
}

function mastermind(guess) {
  if (guess === solution) {
    console.log('You guessed it!');
    process.exit();
    return true;
  } else if (board.length === (solution.length * 2.5)) {
    console.log('You ran out of turns! The solution was ' + solution + '.');
    rl.question('Want to play again? Type yes or no: ', (playAgain) => {
      if (playAgain.toLowerCase === 'yes') {
        getPrompt();
      } else {
        process.end;
      };
    })
  } else {
    var hint = generateHint(solution, guess);
    board.push(hint + ': ' + guess);
    return ('Guess again.');
  }
}

function getPrompt() {
  if (!solution) {
    rl.question('How long do you want the solution to be? 4, 6 or 8 characters: ', (solutionLength) => {
      generateSolution(solutionLength);
      getPrompt();
    })
  } else {
    rl.question('guess: ', (guess) => {
      console.log(mastermind(guess));
      printBoard();
      getPrompt();
    });
  }
}

// Tests

if (typeof describe === 'function') {

  describe('#mastermind()', function() {
    it('should register a guess and generate hints', function() {
      solution = 'abcd';
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', function() {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', function() {
    it('should generate hints', function() {
      assert.equal(generateHint('abcd', 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', function() {
      assert.equal(generateHint('abcd', 'aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
