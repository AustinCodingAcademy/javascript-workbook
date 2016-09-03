'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];




function printBoard() {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i])
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
    // generateHint() is a function that is created to do exactly
    // what it says it will do, generate a hint.
    // spec 2 is broken down into several parts
    //
    // the first thing we know is that it takes in two arguments
    // the two arguements are 'solution' and 'guess'
    // arguments are the named parameters placed in the parantheses immediately
    // following the function name. - done
    //
    //
    // 2.1
    // create a variable named solutionArray
    // create a variable named guessArray
    var solutionArray = solution.split('');
    var guessArray = guess.split('');
    var correctLetterLocations = 0; // will record how many correct "letter-locations" were guessed
    var correctLetters = 0;


    for (var i = 0; i < solutionArray.length; i++) {
      if (guessArray[i] === solutionArray[i]) {
        correctLetterLocations++;
        solutionArray[i] = null;
      }
    }

    for (var i = 0; i < solutionArray.length; i++) {
      var targetIndex = guessArray.indexOf(solutionArray[i]);

//the following if statement simply tells us what to do if
// there is a matching item in guestArray and solutionArray
// if it is greater than - 1 then we know something has been found as this
// is what the indexOf method definition tells us //


      if (targetIndex > - 1) {
        correctLetters++;
        solutionArray[i] = null;
      }
    }


    var hintString = correctLetterLocations + "-" + correctLetters;
      return hintString;
      console.log(hintString);


}








function mastermind(guess) {
    // your code here
    if (guess >= 10) {
      console.log('too many guesses!')
    }
    solution = 'abcd'; //Spec 0 - this is a global variable
    var hint = generateHint(solution, guess);

    if (guess === solution) {
      return ('You guessed it!');
    } // Spec 1 - this is what happens if you 'win' the game

    if (guess !== solution) {
      generateHint(solution, guess);
	          board.push(guess + "  " + hint);
	          return 'Guess Again!';

    }
}


function getPrompt() {
    prompt.get(['guess'], function (error, result) {
        console.log( mastermind(result['guess']) );
        printBoard();
        getPrompt();
    });
}














// Tests

if (typeof describe !== 'undefined') {

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
