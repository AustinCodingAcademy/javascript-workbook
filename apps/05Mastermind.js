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
var colors = require('colors');

// This function does what it says it will do.. prints the board. 

function printBoard() {
  for (var i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

// This is a function that generates a random solution for the game. 

function generateSolution() {
  for (var i = 0; i < 4; i++) {
    var randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

// The function below helps generate a random solution for the game. 

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// This function generates hints for the user, defines a few variables, and runs two for loops. See below for details. 

function generateHint(solution, guess) {
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  var correctLetterLocations = 0;
  var correctLetters = 0;
  
// This for loop compares the user's guess array to the randomly generated solution array and finds how many coorect letters were guessed in the correct location. 

  for (var i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }

// This for loop compares the user's guess to the solution array and finds how many matching letters were in the guess array. 

  for (i = 0; i < solutionArray.length; i++) {
    var targetIndex = guessArray.indexOf(solutionArray[i]);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[i] = null;
    } 
  }

// This returns the above information as a hint to the user. 
  
  return correctLetterLocations + '-' + correctLetters;
}

// This function clears the board for a new game. 

function newGame() {
  return board = [];
}

// The function below is an if/else statement that checks to see if 10 guesses were played. If so, a message is printed and the board is cleared for a new game. If not, the game continues. 

function checkForTen() {
  if (board.length >= 10) {
    console.log('You ran out of turns! The solution was ' + solution + '. Start Over.');
    return newGame();
  } else {
    return 'Guess Again';
  }
};

// The function below is an if/else statement that checks for a win. If so, the user is notified of the win. If not, a hint is defined and returned to the user. 

function mastermind(guess) {
  // solution = 'abcd';
  if (guess === solution) {
    return "You guessed it!";
  } else {
      var hint = generateHint(solution, guess);
      return board.push(guess + ' ' + hint);
  }
};

// Below is a function that asks the user for input, prints this input, labels the board, prints the board, checks for ten guesses, and starts the function over. 


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) + '\n');
    console.log('Board:')
    printBoard();
    checkForTen();
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
