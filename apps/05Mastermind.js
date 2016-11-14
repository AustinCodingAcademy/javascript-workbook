'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// here are the global variables, available throughout all functions:
var board = [];
var solution = '';
// var solution = 'input the answer here!';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}

function generateSolution(solution, guess) {
    for (var i = 0; i < 4; i++) {
        var randomIndex = getRandomInt(0,
            letters.length);
        solution += letters[randomIndex];
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
    // your code here
    var correctLetterLocation = 0;
    // (a counter always starts at zero)
    var correctLetters = 0;
    // following is split, which separates a string into an array:
    var solutionArray = solution.split('');
    var guessArray = guess.split('');

    // so, if true for generate Hint:
    // if (solutionArray[0] === guessArray[0] {
    //   correctLetterLocations ++;})
    // But instead, combine the ifs into one:

    for (var i = 0; i < solutionArray.length; i++) {
        if (solutionArray[i] === guessArray[i]) {
            correctLetterLocation++;
            //  The above is a very typical code.
            // Below is giving a null value to the letter already checked:
            solutionArray[i] = null;
        }
    }

    for (var i = 0; i < guessArray.length; i++) {
        var targetIndex = solutionArray.indexOf(guessArray[i]);
        if (targetIndex > -1) {
            correctLetters++;
            solutionArray[targetIndex] = null;
        }
    } return correctLetterLocation + "-" + correctLetters;
}

function mastermind(guess) {
    // your code here
    if (guess === solution) {
        return "You guessed it!";
    }
    var hint = generateHint(solution, guess);
    board.push(guess + "" + hint);

    if (board.length === 10) {
        return "You ran out of turns! The solution was " + solution;
    }
    return guess;

}

function getPrompt() {
    rl.question('select four letters a-h: ', (guess) => {
        console.log(mastermind(guess));
        printBoard();
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function ') {

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
    // comment out generateSolution to run the test:
    generateSolution();
    getPrompt();
}
