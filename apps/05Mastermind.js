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
 // Check to see if the guessed letters equal solution letters' location
  var correctLetterLocations = 0;
  //  Checks to see if any of the guessed letters equal the solutions letters in ANY location.
  var correctLetters = 0;

 

function generateHint(solution, guess) {
 
  // the .split splits an array by what ever character is put in-between the "" and creates a substring and returns them as an array.
  // this var is assigned the sub string , , , , of the solution array
  var solutionArray = solution.split("");
  // this var is assigned the sub string , , , , of the guess array
  var guessArray = guess.split("");
  
  for (var i = 0; i < solutionArray.length; i++) {
    if (guessArray[i] === solutionArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
      // else leave it alone.
    }
  }

  // This console.log was used to ensure the array was splitting. Its not needed for the game.
  // console.log(solutionArray);

  for (var i = 0; i < solutionArray.length; i++) {

    // This targetIndex is a temporary container that holds the value of i in guessArray and evaluates the .indexOf it in solutionArray. 
    var targetIndex = solutionArray.indexOf(guessArray[i]);

    // Evaluates if the container targetIndex is > -1 (meaning, it exists in the solutionArray), if so it adds a count to correctLetters and sets the value to null.
    if (targetIndex > -1 ){
      solutionArray[i] = null;
      correctLetters++;
    
    }
  }

  // creates a variable to hold the correct Letter and locations to be used later.
  var hint = colors.red(correctLetterLocations) + " - " + colors.blue(correctLetters);

  // pushes the vars of guess and hint into the board to be printed out each time a guess(move) is made.
  board.push(guess + " " + hint);
}



function mastermind(guess) {
  // This is a test line to make sure my function is working. it currently equals 'abcd'
  // solution = "abcd";

  if (board.length === 10) {
    console.log("You ran out of turns");
  }

  else {
    if  (guess === solution) {
    console.log ('You guessed it!');
    return true;
    }

    else {
    generateHint(solution, guess);
    }
  
    console.log("guess again");



  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( "checkers" + mastermind(guess) );
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
