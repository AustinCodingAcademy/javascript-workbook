'use strict';
//test


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

function validate(guess) {
  // var solutionArray = solution.split('');
  // console.log('solutionArray: ' + solutionArray);
  // var guessArray = guess.split('');
  // console.log('guessArray: '+ guessArray);
  // if (guessArray.length === 4) {
  //   for (var i = 0; i < guessArray.length, i++){

  //   }
  // } else {
  //   console.log('invalid');
  //   return false;
  // }
}

function generateHint(solution, guess) {
  var solutionArray = solution.split('');
  console.log('solution array:', solutionArray);
  var guessArray = guess.split('');
  console.log('guess array:', guessArray);
  var correctLetterLocations = 0;
  for (var i = 0; i < solutionArray.length; i++) {
    if (guessArray[i] === solutionArray[i]) {
      solutionArray[i] = null;
      console.log('solution array:', solutionArray);
      correctLetterLocations++;
      console.log('correct letter location count:', correctLetterLocations);
    }
  }
  var correctLetters = 0;
  for (var i = 0; i < solutionArray.length; i++) {
    console.log('guessArray.indexOf(i):', guessArray.indexOf(i));
    console.log('solutionArray[guessArray.indexOf(i)]', solutionArray[guessArray.indexOf(i)])
    var targetIndex = solutionArray.indexOf(guessArray[i]);
    console.log('target index:', targetIndex);
    if (targetIndex > -1) {
      correctLetters++;
      console.log('correctLetter:', correctLetters);
      solutionArray[targetIndex] = null;
      console.log('solution array:', solutionArray);
      console.log('******************');
    }
  }
  console.log('*correct letter locations: ' + correctLetterLocations + '\n' + ' *correct amount of letter in wrong location: ' + correctLetters);
  return correctLetterLocations + '-' + correctLetters;
}


function mastermind(guess) {
  //if (validate(guess)) {
  //solution = 'abcd';
  if (guess === solution) {
    board = [];
    return 'You guessed it!';
  } else {
    var hint = generateHint(solution, guess);
    board.push(guess, hint);
  }
  //}
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log(mastermind(guess));
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