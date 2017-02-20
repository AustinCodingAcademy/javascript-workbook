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
  num++; // increments the nth attempt of Guess
  var solutionArray = solution.split('');
  var guessArray = guess.split('');
  var correctLetterLocations = 0;
  var correctLetters = 0;

  for (var i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }

  for (i = 0; i <= solutionArray.length; i++) {
    console.log('target index each time pre: '+ targetIndex)
    var targetIndex = guessArray.indexOf(solutionArray[i]);
      console.log('target index number indexOf found:' + targetIndex)
    if (targetIndex > -1) {
      console.log ('match found')
      correctLetters++;
      solutionArray[i] = null;
    }
  }
  return num + '. ' + correctLetterLocations + '-' + correctLetters;

}

function mastermind(guess) {
    // your code here
  var solution = 'abcd' //temp hard code
  //console.log(guess + ' guess');  // user input 'guess' that was passed
  //console.log(solution + ' solution')  // solution for the sake of showoing what is saved

  if (guess === solution) {
    board = [];
    return 'You guessed it!' //when guess is ame as solution.  Spec 2
  }

  if (board.length === 10) {
    board = [];
    return 'Your ran out of turns.  The solution is:  ' + solution;
  } else {
    console.log(guess + ' my guess');
    var hint = generateHint(solution, guess);
    board.push(hint + ' ' + guess);
    return ('Guess again');
  } //end of if statement
} //end of function


function getPrompt() {
    rl.question('guess: ', (guess) => {
        console.log(mastermind(guess));
        printBoard();
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#mastermind()', function() {
        it('should register a guess and generate hints', function() {
            solution = 'abcd';
            mastermind('aabb');
            assert.equal(board.length, 1);
        });
        it('should be able to detect a win', function() {
            assert.equal(mastermind(solution), 'You guessed it!');
        });
    });

    describe('#generateHint()', function() {
        it('should generate hints', function() {
            assert.equal(generateHint('abcd', 'abdc'), '2-2');
        });
        it('should generate hints if solution has duplicates', function() {
            assert.equal(generateHint('abcd', 'aabb'), '1-1');
        });

    });

} else {

    generateSolution();
    getPrompt();
}
