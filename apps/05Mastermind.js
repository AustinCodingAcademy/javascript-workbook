'use strict';

//not sure what this does yet..
//declared down the list and set to nothing.
//difference?
//put INSIDE mastermind bruh 
//solution = 'abcd';


//global stuff?
//set locally in order to change value as needed
//var i = 0;
//set locally because avas wrong ;)
//var = correctLetterLocations = 0;



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
  //hint me baby ;)
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  // .split @ '' nothing in quotes is every place. 
  // will turn each 'step' into an array
  //console.log(solutionArray);
  //console.log('solutionArray value ^^');

  var correctLetterLocations = 0;
  var correctLetter = 0;
  

  for (var i = 0; i < 4; i++) {
    if (solutionArray[i] === guessArray[i]){
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }

  for (var i = 0; i < 4; i++) {
    var targetIndex = solutionArray.indexOf(guessArray[i]);
    if (targetIndex > -1) {
      correctLetter++;
      solutionArray[targetIndex] = null;
    }

  }
  return correctLetterLocations + '-' + correctLetter;
}

function mastermind(guess) {
  // your code here
  //start writing code!!!
  // -_-
  solution = 'abcd';
  var hint = generateHint(solution, guess);
  board.push(guess+ ' ' + hint);
  if (guess === solution) {
    //console.log('*******************');
    //console.log('* You guessed it! *');
    //console.log('*******************');
    return 'You guessed it!';
  }
  else if (board.length === 10) {
    return 'You ran out of turns! The solution was ' + solution;
  }
 else {
   //console.log('hit else');
   //console.log(board); 
   return 'Try again';
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
