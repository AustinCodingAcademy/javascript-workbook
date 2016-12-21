'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var board = [];
var solution = 'abcd';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var hint = [];

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
  var guessArray = guess.split('');
  var solutionArray = solution.split('');
  var correctLetterLocations = 0;
  var correctLettersWrongLocation = 0;

//checks for location matches
  for (var i = 0; i < solutionArray.length; i++) {
    if(solutionArray[i] === guessArray[i]){
      correctLetterLocations ++;
      //above find every location where there is a matche
      solutionArray[i] = null;

    }
  }

//checks for letter/varable matches
  for (var i = 0; i < solutionArray.length; i++) {
    var targetIndex = solutionArray.indexOf(guessArray [i]);
      if(targetIndex > -1){
        correctLettersWrongLocation ++;
        solutionArray[targetIndex] = null;
      }
      }
      return correctLetterLocations + "-" + correctLettersWrongLocation;
    }



function mastermind(guess) {
  // your code here
  // when thier guess matches the solution

  if (guess === solution){
    return 'You guessed it!';
  };
  console.log("You've guessed it!");

//console.log( "You've run out of turns. Answer: " + solution)

var hint = generateHint(solution, guess);
board.push(hint + " " + guess);

if(board.length === 10){
  return 'Youve run out of turns. Answer is:' + solution
}
 return guess;


}


function getPrompt() {
  rl.question('Type any 4 letters between a and h. Your guess: ', (guess) => {
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
