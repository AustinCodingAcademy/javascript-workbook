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


// function gnerateHint will take the computer generated solution and the user guess input and pass it
// as perameters to be tested aainst eachother
function generateHint(solution, guess) {
    // your code here
   var solutionArray = solution.split(''); // turn the RNG solution into an array, split up by blank strings
   var guessArray = guess.split(''); // user input into an array, split by empty strings
   var correctLetterLocations = 0; //index for the ammount of correct locations of a letter by the user
   var correctLetters = 0; //index of correct letters in the array by the user
 
   for (var i = 0; i < solutionArray.length; i++) { // loop over the solutionArray using index i
     if (solutionArray[i] === guessArray[i]) { //if the character found at index i matches in both arrays, you have a match!
       correctLetterLocations++; // add 1 to correctLetterLocations, this will be returned 
       solutionArray[i] = null; // null out the position in solutonArray index i, as to not be repeated
     }
    var targetIndex = solutionArray.indexOf(guessArray[i]); // check to see if any of the letters in guess array exist in solution array
     if (targetIndex > -1) {// if matches were found, return true
        correctLetters++; //add 1 to correctLetters, return this value as well
        solutionArray[targetIndex] = null; // null out the value at target index in solution array
     }
   }
   return (correctLetters+'-'+correctLetterLocations); // return the values needed for user to see the hint
  }

// game play function,
function mastermind(guess) { 
  // your code here
  if (guess === solution) { // check to see if user guessed the puzzle correctly
     return ('You guessed it!'); //end game here  with winning message
   } else if (board.length === 10) { // check to see if  max number of turns has been reached
     return ('You ran out of turns! The solution was ' + solution + '.') //end game if max turns has been reached
   }
   else {
     var hint = generateHint(solution, guess); // apply the return values of generateHint() to the variable hint
     board.push(hint + ' ' +guess); // push onto the board both the hint you just created and the guess
     return ('Guess again');
   }
  generateHint(guess); // run the generate hint function if game continues
  
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
