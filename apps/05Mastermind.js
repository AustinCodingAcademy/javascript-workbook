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
  // generateHint() should take two arguments, solution and guess
  //In generateHint(), create variables solutionArray and guessArray that each split up passed in arguments, .splitting on ''(empty string).
  //var arrayOfStrings = stringToSplit.split(separator);
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  //Create a variable correctLetterLocations that will record how many correct "letter-locations" were guessed. For instance, a guess of aabc against a solution of deba would yield one correct "letter-location" (b). Set correctLetterLocations equal to 0. In a for loop, iterate over the solutionArray, comparing each index of solutionArray against the same index of guessArray. If the item matches, increment correctLetterLocations, and set that index in solutionArray to null.
  //not sure if this is written right
  var correctLetterLocations = 0;
  for (var i = 0; i <= solutionArray.length; i++) {
  if (guessArray[i] === solutionArray[i]){
    correctLetterLocations++;
    solutionArray[i] = null;
  }
}
  //Now that we have nulled the already counted correctLetterLocations, we can see if the guessArray contains any correctLetters that were not in the correct location. Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray. Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray. Save that index in a variable called targetIndex. Now, if targetIndex is greater that -1, increment correctLetters and set the item in solutionArray at that index equal to null.
  //not sure if this is written right
  var correctLetters = 0;
  for (var i = 0; i <= solutionArray.length; i++) {
    if (guessArray[i].indexOf() === solutionArray[i].indexOf()){
      var targetIndex = guessArray[i];
      if (targetIndex > -1){
        correctLetters++;
        solutionArray[i] = null;
      }
    }
  }
  return correctLetterLocations.red;
  return correctLetters.green;
}


function mastermind(guess) {
  // your code here
  solution = 'abcd'
  if (guess === solution){
    return "you guessed it";
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
