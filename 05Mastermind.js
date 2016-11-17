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

//ask the user to type in the colors they want in order seperated by comas.
//"blue, red, yellow, blue"

function getPrompt() {
    rl.question('Please type in the colors you want to choose in order seperated by comas: ', (guess) => {

                var guessAsArray = guess.split(',');
                var solutionArray = solution.split(",");
                var spot1 = guessAsArray(0);

                if (solution === guess) {
                    console.log('win');
                    return;
                }


                function generateSolution() {
                    for (var i = 0; i < 4; i++) {
                        var randomIndex = getRandomInt(0, letters.length);
                        solution += letters[randomIndex];
                    }
                }

                function generateHint(solution, guess) {

                }

                //begining at this line of code means we didn't win'
                //what are out hints
                //correct colors in the right spot 
                //correct colors in the wrong spot 

                var correctspot = 0;
                var wrongspots = 0;

                for (var i = 0; i < solutionArray.length; i++) {
                    if (guessAsArray[0] === solutionArray[i]) {
                        correctspot++;
                        solutionArray[i] = null;
                    } // end if statement
                } //end for


                for (var i = 0; i < solutionArray.length; i++) {
                    var targetindex = solutionArray.indexOf(guessAsArray[i]);
                    if (targetindex > -1) {
                        wrongspots++

                    } else {
                        console.log('Loser!')
                    } //end else 

                    console.log('there are this many in the correct spots:' + correctspot);
                    console.log("there are this many colors in the wrong spots: " + wrongspots);

                }; // end for 




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