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
var winCheck = false;


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
  var solutionArray = solution.split('') //splits letters of solution array into separate items
  var guessArray = guess.split('') //splits letters of guess array into separate items
  var correctLetterLocations = 0; //correct letter locations starts at 0
  for (var i = 0; i < 4; i++) {
    if (solutionArray[i] === guessArray[i]) { //if when counting up from 0, the corresponding solutionarray index and guessaray index are equal...
      correctLetterLocations++; //then increment correctLetterLocations
      solutionArray[i] = null; //then set index in solution array to null
    }
  }
  var correctLetters = 0; //correct # letters starts at 0
  var targetIndex = 0;
  for (var i = 0; i < 4; i++) {
  targetIndex = solutionArray.indexOf(guessArray[i]);
  if(targetIndex > -1) { //iterate up to find if the targetindex item of guess is similar to an item in any index of solution
    correctLetters++; //increment the correct letters
    solutionArray[targetIndex] = null; //set that item in the solution at that index to null
  }
  }
  return correctLetterLocations + "-" + correctLetters; //return the correct letter locations + the correct letters for player to see
}

function mastermind(guess) {
  // your code here
  solution = 'abcd'; //the solution to the game
  if (guess === solution) { //if the guess is the same as the solution
    winCheck = true;
    return "You guessed it!"; //print that they guessed it
  }else{
    var hint = generateHint(solution, guess); //otherwise, give them the hint from their answer
    board.push(guess + hint);

  }
}


function getPrompt() {
  if(winCheck === false) { //if wincheck doesn't detect a win
    prompt.get(['guess'], function (error, result) { //prompt user to guess
      if(board.length === 10) { //if the user has guessed 10, times...
        console.log('You ran out of turns! The solution was ' + solution) //print that they're out of turns + the solution
      } else { //otherwise...
        console.log( mastermind(result['guess']) );
        printBoard();//print the board for user to see,
        getPrompt(); //and prompt user to guess
      }
    });
  }
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
