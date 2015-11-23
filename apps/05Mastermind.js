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
    var solutionArray = solution.split(''); // ['c', 'b, 'a', 'b' ]
    var guessArray = guess.split(''); // ['a', 'b', 'c', 'b']

    var correctLetterLocations = 0;

    // write a loop that loops over each item
    // in solutionArray
    for (var i = 0; i < solutionArray.length; i++) {
        // if solutionArray at index i is equal to
        // guessArray at index i, then increment correctLetterLocations,
        // and cancel out solutionArra at that index
        if (solutionArray[i] === guessArray[i]) {
            correctLetterLocations++;
            solutionArray[i] = null;
        }
    }

    var correctLetters = 0;
    for (var i = 0; i < solutionArray.length; i++) {
        // if solution array contains guessArray at index i,
        // increment correctLetters and cancel out index i of
        // solutionArray

        // must save the index just in case it does exist
        var targetIndex = solutionArray.indexOf(guessArray[i]);
        if ( targetIndex > -1 ) {
            correctLetters++;
            // so that we can "target" it for nullification
            solutionArray[targetIndex] = null;
        }
    }

    return colors.red(correctLetterLocations) + ' - ' + correctLetters;
}

function mastermind(guess) {
    if (guess === solution) {
        return 'You guessed it!';
    }

    var hint = generateHint(solution, guess);
    board.push(guess + ' ' + hint);

    if (board.length === 10) {
        return 'You ran out of turns! The solution was ' + solution;
    }

    return "Guess again.";
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
} else {

    generateSolution();
    getPrompt();
}
