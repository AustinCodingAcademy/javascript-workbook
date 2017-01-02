'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var board = [];
var solution = 'abcd';
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


function generateHint(solution, guess) {
    // both strings are now split into component arrays
    var solutionArray = solution.split('');
    var guessArray = guess.split('');

    //debug
    console.log("Arguments have been split(), Solution Array: " + solutionArray + "  Guess Array: " + guessArray);
    ////////////////

    var correctLetterLocations = 0;

    //debug
    console.log("Going inside for loop and now iterating through Solution Array!!");
    //////////////
    for (var x = 0; x < solutionArray.length; x++) {
        if (solutionArray[x] == guessArray[x]) {
            correctLetterLocations += 1;
            solutionArray[x] = null;
            //debug
            console.log("SolutionArray value: " + solutionArray[x] + " Guess Array Value: " + guessArray[x] + " correctLetterLocations: " + correctLetterLocations);
            ////////////
        }
    }

    //Stores number of correct letters guessed
    var correctLetters = 0;

    //DEBUG
    console.log("Going inside for loop to determine correct letters");
    //////////

    for(var y = 0; y < solutionArray.length; y++){
      var targetIndex = solutionArray.indexOf(guessArray[y]);

      if(targetIndex > -1){
        correctLetters += 1;
        solutionArray[targetIndex] = null;
      }
    }


    console.log(correctLetterLocations + "-" + correctLetters);
    return correctLetterLocations + "-" + correctLetters;
}

function mastermind(guess) {

    var hint = generateHint(solution, guess);

    board.push(guess+hint);

    if (guess == solution) {
        return 'You guessed it!';
    }
}


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
