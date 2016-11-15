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
  // solution = "abcd";
  // console.log(solution);

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  // your code here
  //hint format exact-almost

  var hint;
  var guessArray = guess.split("");
  var solutionArray = solution.split("");
  // console.log(solutionArray);

  //get exact matches
  var exactMatch = 0;
  for (var i = 0; i < solutionArray.length; i++ ) {
    if (guessArray[i] === solutionArray[i]) {
      delete guessArray[i];
      delete solutionArray[i];
      exactMatch++;
    //  console.log("EXACT = [" + solutionArray +"]");
    }
  }
  //for guess[i]...  loop through all of solutions and see if it detects a match.   if so closeMatch++
  var closeMatch = 0;
    // for (var i = 0; i < solutionArray.length; i++ ) {
    //   if (guessArray[i] !== undefined) {
    //     for (var j = 0; j < solutionArray.length; j++) {
    //       if (guessArray[i] === solutionArray[j]) {
    //         // console.log(solutionArray[i]);
    //         delete solutionArray[j];
    //         closeMatch++;
    //         j=4;
    //         // return;
    //       }
    //     }
    //   }
    // }

    for (var i = 0; i < solutionArray.length; i++ ) {
      if (solutionArray[i] !== undefined) {
        if (guessArray.indexOf(solutionArray[i]) !== -1) {
          // console.log("index of " + guessArray.indexOf(solutionArray[i]));
          delete guessArray[guessArray.indexOf(solutionArray[i])];
          console.log(guessArray);
          closeMatch++;
        }
      }
    }

  console.log("exact:" + exactMatch + " close: " + closeMatch);
  // console.log(solutionArray);
  // console.log(exactMatch);
  // var hint = exactMatch+ '-' + closeMatch;
  var hint = closeMatch+ '-' + exactMatch;
  console.log("the hint is " + hint);
  return hint;
}

function mastermind(guess) {
  // your code here
  // console.log(guess);
  // board.push(guess.split(""));
  board.push(guess);
  // console.log(board);
  if (guess === solution) {
    return 'You guessed it!';
  }
  else {
   generateHint(solution, guess);
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
