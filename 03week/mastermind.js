'use strict';

const assert = require('assert');
const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let board = [];
let solution = '';
let hint = '';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}

function generateSolution() {
    for (let i = 0; i < 4; i++) {
        const randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
    // your code here
    function split(string) {
        return string.split('')
    }
    solutionArr = split(solution)
    guessArr = split(guess)

    let exact = 0;
    let correct = 0;

    for (let i = 0; i < solution.length; i++) {
        if (solutionArr[i] === guessArr[i]) {
            exact++
        } else (solutionArr.includes(guessArr[i])) {
            correct++
        }
    }

    hint = `${exact}-${correct}`;
    return hint;



    function mastermind(guess) {
        // your code here
        // first push guess to the board

        generateHint(guess);
        // this is checking if the count for exact is equal to 4 which would mean you won the game

        if (exact === 4) {
            console.log('You guessed it!');
        }
        //return board with guess and hint
        else {
            board.push(guess + ': ' + hint);
            printBoard();
            exact = 0;
            correct = 0;
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

        describe('#mastermind()', () => {
            it('should register a guess and generate hints', () => {
                solution = 'abcd';
                mastermind('aabb');
                assert.equal(board.length, 1);
            });
            it('should be able to detect a win', () => {
                assert.equal(mastermind(solution), 'You guessed it!');
                //to pass the test you have to display the exact words 'You guessed it!'
            });
        });


        describe('#generateHint()', () => {
            it('should generate hints', () => {
                assert.equal(generateHint('abcd', 'abdc'), '2-2');
            });
            it('should generate hints if solution has duplicates', () => {
                assert.equal(generateHint('abcd', 'aabb'), '1-1');
            });

        });

    } else {

        generateSolution();
        getPrompt();
    }
