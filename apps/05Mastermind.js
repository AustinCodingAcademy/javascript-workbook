'use strict';

var assert = require('assert');
var colors = require('colors');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var board = [];
var solution = '';
var guess;
var turn = 1;
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
  // Separate letters into an array.
  var solutionArray = solution.split("");
  var guessArray = guess.split("");
  var correctLetters = 0;
  var correctLetterLocations = 0;
  var correctLettersArray = [];
  // This is where the magic happens.
  // Compares guess array to solution array and identifies correct letters and locations.
  for (var j = 0; j < 4; j++){
    for(var i = 0; i < 4; i++){
      if(guessArray[j] === solutionArray[i]){ // compares first letter in guess with all letters in solution
        correctLettersArray[j] = guessArray[j]; // add guess letter to correctLetterArray
        if(j === i){ // compares position guess index with solution index
          correctLetterLocations++;  // add number to correct position
        }
        else{
          correctLetters++; // if its not in the same position, just add ++ to correctLetters
          if(correctLettersArray.length > 0){ //checks if there is a similar letter in the array
            if(correctLettersArray[j] === correctLettersArray[j-1]){
              correctLetters--; // if there is a similar letter in the array, correctLetters--
            }
          }
        }
      }
    }
  }
  return correctLetterLocations + "-" + correctLetters; // After both for loops, it returns all the letters that it found.
}

function mastermind(guess) {
  // If guess is equal to solution, you guessed it!
  if (guess === solution){
    return 'You guessed it!';
  }
  // Else, if your board length is less than 10, keep playing!
  else if (board.length < 10){
    var hint = generateHint(solution, guess);
    board.push(hint +' '+ guess);
  }
  // Else, you are out!
  else{
    turn = 0;
    board = [];
    return 'Game over, guess again!';
  }
}

function getPrompt() {
  rl.question('This is your ' + turn + ' turn, guess (a,b,c,d,e,f,g,h): ', (guess) => {
    mastermind(guess);
    turn++;
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
