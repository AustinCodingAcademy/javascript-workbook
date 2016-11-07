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
  for (var i = 0; i < generateSolution.length; i++) {
    var randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  // your code here
  var solutionArray = solution.split("");
  var correctLetterLocations = 0;
  var correctLetters = 0;
  var guessArray = guess.split('');
  for(var i = 0; i < solutionArray.length; i++){
    if(solutionArray[i] === guessArray[i]){
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }

for(var i = 0; i < solutionArray.length; i++){
  var targetindex = solutionArray.indexOf(guessArray[i]);
  if(targetindex > -1){
    correctLetters ++;
    solutionArray[targetindex]=null;
  }
}
return correctLetterLocations + "-" + correctLetters;
}

function mastermind(guess) {
  // your code here
    if(guess === solution){
  return "You guessed it!";
  }
  var hint = generateHint(solution, guess);
  board.push(hint);
//  if (board.length = 10){
//    return "You ran out of turns";

//  }
}


function getPrompt() {
  rl.question('guess: Type any 4 letters between a through h ', (guess) => {
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

//  generateSolution();
  getPrompt();
}
