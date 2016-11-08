'use strict';
var colors = require('colors');

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
var hint = [];

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
    for (var i = 0; i < solutionArray.length; i++) {
        var targetIndex = guessArray.indexOf(solutionArray[i]) //this finds the index of guessArray[i] inside of solutionArray
        if (targetIndex > -1) {
            correctLetters++;
        }
    }

    hint = correctLetterLocations + '-' + correctLetters;
    return hint;

}


function mastermind(guess) {


    if (board.length === 10) {
        console.log('You ran out of turns! The solution was ' + solution);
        process.exit();
    }

    if (guess === solution) {
        console.log('You guessed it!'.rainbow);
        process.exit();
    }
    generateHint(solution, guess);
    board.push(hint + ' ' + guess);



    return guess;

}

function getPrompt() {
    console.log('Guess a four letter code using "a", "b", "c", "d", "e", "f", "g", or "h"');
    rl.question('guess: ', (guess) => {
        console.log('\n' + 'Guess:');
        console.log(mastermind(guess) + '\n');
        console.log('Board:');
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
