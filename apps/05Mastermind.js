'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var board = [];
var solution = "";
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


//
// var hint = generateHint(); Needs parameters!!


function generateHint(solution, guess) {
  // Check to see if the guessed letters equal solution letters' location
  var correctLetterLocation = 0;
  //  Checks to see if any of the guessed letters equal the solutions letters in ANY location.
  var correctLetters  = 0;
  // the .split splits an array by what ever character is put in-between the "" and creates a substring and returns them as an array.
  // this var is assigned the sub string , , , , of the solution array
  console.log(solution);
  var solutionArray = solution.split("");
  // this var is assigned the sub string , , , , of the guess array
  var guessArray = guess.split("");
  
  for (var i = 0; i < solutionArray.length; i++) {
    if (guessArray[i] === solutionArray[i]) {
      correctLetterLocation++;
      solutionArray[i] = null;
    }
  }
  // console.log(solutionArray);
  for (var i = 0; i < solutionArray.length; i++) {
    // This targetIndex is a temporary container the holds the value of i in guessArray and evaluates the .indexOf it in solutionArray. 
    var targetIndex = solutionArray.indexOf(guessArray[i]);
    // Evaluates if the container targetIndex is > -1 (meaning, it exists in the solutionArray), if so it adds a count to correctLetters and sets the value to null.
    if (targetIndex > -1 ){
      solutionArray[i] = null;
      correctLetters++;
    
    }
  }

  // board.push(guess + hint);

  // return correctLetterLocation + " - " + correctLetters;
 
  
}

function mastermind(guess) {
  // This is a test line to make sure my function is working. it currently equals 'abcd'
  // solution = "abcd";

  if  (guess === solution) {
    console.log ('You guessed it!');
    return true;
  }
  else {
    console.log(solution);
    generateHint(solution, guess);
    console.log(correctLetterLocation);
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
