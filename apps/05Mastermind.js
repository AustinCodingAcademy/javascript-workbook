'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var hint = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var solutionLength = solution.length;

var numberOfGuesses = 0;

function printBoard() {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
    return board;
}

function printNumberOfGuesses() {
    console.log('# of Guesses: ' + numberOfGuesses);
}

function generateSolution() {
    for (var i = 0; i < 4; i++) {
        var randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex]; //same an concatenating strings, assumes empty starting string
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess, solution) {

    console.log('solution is ' + solution);

    var guessArray = guess.split('');
    var solutionArray = solution.split('');

    //1 - first check to see if any letters also match the exact position of the solution
    //2 - then check to see if any letters of the guess are in the solution
    var guessLength = guessArray.length;
    var solutionLength = solutionArray.length;
    var correctLetterLocations = 0;

    for (var i = 0; i <= (solutionLength - 1); i++) {

        if (guessArray[i] === solutionArray[i]) {
            correctLetterLocations++;
            guessArray[i] = null;
            solutionArray[i] = null;
        }

    }

    var correctLetters = 0;

    //now check remaining letters to look for similar values
    for (var j = 0; j <= (guessLength - 1); j++) {

        var letterIndex = solutionArray.indexOf(guessArray[j]);

        if (letterIndex > -1) {
            correctLetters++;
        }

    }

    //we don't want to double count the correct letter positions, so we subtract that number out
    correctLetters = correctLetters - correctLetterLocations;

    //commenting out the colors since it was making my tests not pass.
    //hint = colors.red(correctLetterLocations) + '-' + colors.white(correctLetters);

    hint = correctLetterLocations + '-' + correctLetters;

    return hint;

}


function mastermind(guess) {

    //first check to see if they guessed correctly; if so, then they win!
    //if they did not guess it correctly, then you need to generate a hint

    //advance the number of guesses by 1
    numberOfGuesses++;

    printNumberOfGuesses();

    if (numberOfGuesses < 10) {

        if (guess === solution) {

            //I had fancier code here to customize the response if they guessed in 1 try - but returning anything other than "You guessed it!" means it wouldn't pass the test.  So I am not using this code right now.
            if (numberOfGuesses === 1) {
                return 'You guessed it!';
                //console.log('You won in ' + numberOfGuesses + ' guess!  Amazing - you must be a mind reader!');
                process.exit();
            } else {
                return 'You guessed it!';
                //console.log('You won in ' + numberOfGuesses + ' guesses!  Good job!');
                process.exit();
            }
        } else {
            //carry on with game
            //compare to see what is the same
            generateHint(guess, solution);
            console.log('Guess again.');
            return board.push(guess + ' ' + hint);
        }
    } else {
        return 'You ran out of turns! The solution was ' + solution;
        process.exit();
    }

}


function getPrompt() {

    prompt.get(['guess'], function(error, result) {

        var guess = result['guess'];
        var guessLength = guess.length;

        if (guessLength === 4) {
            mastermind(guess);
            printBoard();
            getPrompt();
        } else {
            console.log('Your guess must be only 4 characters!');
            getPrompt();
        }

    });
}

//getPrompt();

// Tests

if (typeof describe !== 'undefined') {

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
