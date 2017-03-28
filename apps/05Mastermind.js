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

function generateHint(solution,guess) {
  // your code here
  var solutionArray=solution.split('');
  //console.log(solutionArray+" is the answer.")
  var guessArray=guess.split('');
  var correctLetterLocations=0;
  var i;

  for (i=0; i<4; i++) {
    var solutionLetter=solutionArray[i];
    var guessLetter=guessArray[i];

    if (solutionLetter === guessLetter) {
      correctLetterLocations++;
      solutionArray[i]=null;
      }
  }

  var correctLetters=0;
  var i;
  for (i=0; i<4; i++) {
    var guessLetter=guessArray[i];
    var targetIndex=solutionArray.indexOf(guessLetter);
    if (targetIndex!==-1) {
        solutionArray[targetIndex]=null;
        correctLetters++;
      }
  }

  return (correctLetterLocations+"-"+correctLetters)
}

function mastermind(guess) {
  // your code here
  var hint=generateHint(solution,guess);
  board.push(guess+hint)

  if (solution===guess)
    {
    return ('You guessed it!')
    }
  else
    {
    if (board.length===10) {
      return ('You ran out of turns! The solution was '+solution)
      }
    else
      {
      return ('Guess again!')
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
