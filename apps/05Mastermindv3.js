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
var num = 0;
var guess ='';

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
  var solutionArray = solution.split('');  //adds guess to solution format
  var guessArray = guess.split('');  //add guess to Array format
  var correctLetterLocations = 0;
  var correctLetters = 0;
  var i = 0;

// determine correct letter location
  for (i=0; i<solutionArray.length; i++){
    if (solutionArray[i] === guessArray[i]){
      correctLetterLocations++;
      solutionArray[i] = null;
    } //end of if
  } //end of for loop

//determine correct letters
  for (i=0; i<solutionArray.length; i++){
    var targetIndex = solutionArray.indexOf(guessArray[i])
    if (targetIndex > -1){
      correctLetters++;
      solutionArray[targetIndex] = null;
    } //end of if

  } //end of for loop
  return correctLetterLocations + '-' + correctLetters;
}

function mastermind(guess) {
  // your code here
  num++;  //used to count number of moves....doesn't work in test
//  var solution = 'aaaa';


  if (guess === solution){  //compares for exact match
  //  board = [];   //resets the board....doesn't work in test
  //  num = 0;  // counts number of moves....doesnt work in test
    return 'You guessed it!';
  }

  if (board.length === 10) {  //compare for 10 or less tries
    //board = [];  //resets the board....doesn't work in test
    //num = 0;  //resets the board...doesnt' work in test
    return ('You ran out of turns! The solution was ' + solution);
  } else {  // gives hint on the board
    var hint = generateHint(solution, guess);
    board.push(hint +' '+ guess);
    return ('Guess again');
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    console.log(solution)
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
